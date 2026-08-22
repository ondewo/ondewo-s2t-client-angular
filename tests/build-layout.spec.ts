/**
 * Packaging-layout guard: hand-written sources must not live under ng-packagr's `dest`.
 *
 * ng-packagr 20 deletes `dest` recursively (`rmdir(dest, { recursive: true })` in
 * `ng-package/package.transform.js`) BEFORE tsc compiles the library entry point, so any
 * hand-written source underneath it is gone by the time the compilation that needs it runs.
 * The Keycloak auth surface used to live at `src/lib/auth` and `dest` resolves to `<src>/lib`,
 * so as soon as ondewo-proto-compiler 5.13.0 taught the generated barrel to star-export that
 * directory the library build died with `TS2307: Cannot find module './lib/auth'`. Before that
 * compiler the barrel never mentioned the directory, so the build stayed green and shipped a
 * package with no auth surface in it - the defect was armed, not visible.
 *
 * `dest` is READ from the ng-package.json the build actually uses, never assumed: the compiler
 * copies its own default into the library source root whenever this repository does not ship
 * one, so the invariant has to survive a change on either side of that seam.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';

/** Absolute path of the repository root (this file lives in `<root>/tests`). */
const REPO_ROOT: string = path.resolve(__dirname, '..');

/** The directory mounted as the codegen container's input volume, and ng-packagr's project root. */
const LIBRARY_SOURCE_ROOT: string = path.join(REPO_ROOT, 'src');

/** The `ondewo-s2t-api` submodule: generated protos, not hand-written library source. */
const API_SUBMODULE: string = path.join(LIBRARY_SOURCE_ROOT, 'ondewo-s2t-api');

/** An ng-package.json shipped by this repository wins over the compiler's default. */
const REPO_NG_PACKAGE: string = path.join(LIBRARY_SOURCE_ROOT, 'ng-package.json');

/** The default the compiler copies into the library source root when the repository ships none. */
const COMPILER_NG_PACKAGE: string = path.join(
	REPO_ROOT,
	'ondewo-proto-compiler',
	'angular',
	'image-data',
	'default-lib-files',
	'ng-package.json'
);

/** The ng-packagr configuration keys this guard reads. */
interface NgPackageConfig {
	dest?: string;
}

/**
 * The ng-package.json the build resolves, or `null` when neither is on disk. The compiler is an
 * SSH submodule that a CI runner cannot clone, so its absence is environmental and reported as a
 * visible skip rather than as a failure.
 */
function resolveNgPackageFile(): string | null {
	if (fs.existsSync(REPO_NG_PACKAGE)) {
		return REPO_NG_PACKAGE;
	}
	if (fs.existsSync(COMPILER_NG_PACKAGE)) {
		return COMPILER_NG_PACKAGE;
	}
	return null;
}

/**
 * Absolute path of the directory ng-packagr wipes, resolved against the library source root.
 *
 * Takes the nullable path the resolution returns rather than a narrowed one: the root
 * `tsconfig.json` eslint type-checks against runs with `strictNullChecks` off and calls the
 * narrowing assertion that would otherwise be needed "unnecessary", while the strict
 * `tsconfig.spec.json` jest compiles with requires it. A plain guard satisfies both.
 */
function readDestDirectory(ngPackageFile: string | null): string {
	if (ngPackageFile === null) {
		throw new Error('neither an ng-package.json in src/ nor the compiler default is on disk');
	}
	const parsed: NgPackageConfig = JSON.parse(fs.readFileSync(ngPackageFile, 'utf8')) as NgPackageConfig;
	const dest: string | undefined = parsed.dest;
	if (dest === undefined || dest.trim() === '') {
		throw new Error(`${ngPackageFile} declares no "dest"; ng-packagr's output directory is unknown`);
	}
	return path.resolve(LIBRARY_SOURCE_ROOT, dest);
}

/** Every hand-written TypeScript file under the library source root, api submodule excluded. */
function findHandWrittenSources(directory: string): string[] {
	const found: string[] = [];
	for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
		const absolute: string = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			if (absolute === API_SUBMODULE || entry.name === 'node_modules') {
				continue;
			}
			found.push(...findHandWrittenSources(absolute));
		} else if (entry.isFile() && entry.name.endsWith('.ts')) {
			found.push(absolute);
		}
	}
	return found;
}

/** True when `candidate` is `parent` itself or sits underneath it. */
function isInside(candidate: string, parent: string): boolean {
	const relative: string = path.relative(parent, candidate);
	return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

const NG_PACKAGE_FILE: string | null = resolveNgPackageFile();
const describeWhenCompilerConfigIsAvailable: jest.Describe = NG_PACKAGE_FILE === null ? describe.skip : describe;

describeWhenCompilerConfigIsAvailable('hand-written library sources versus ng-packagr dest', () => {
	it('keeps every hand-written source outside the directory ng-packagr deletes', () => {
		const destDirectory: string = readDestDirectory(NG_PACKAGE_FILE);
		const handWritten: string[] = findHandWrittenSources(LIBRARY_SOURCE_ROOT);

		// An empty scan is a broken guard, not a passing one.
		expect(handWritten.length).toBeGreaterThan(0);

		const doomed: string[] = handWritten.filter((source: string) => isInside(source, destDirectory));
		expect(doomed.map((source: string) => path.relative(REPO_ROOT, source))).toEqual([]);
	});

	it('lets the jest and tsconfig.spec paths follow the sources they cover', () => {
		const destDirectory: string = readDestDirectory(NG_PACKAGE_FILE);
		const handWritten: string[] = findHandWrittenSources(LIBRARY_SOURCE_ROOT);
		const owningDirectories: Set<string> = new Set(
			handWritten.map((source: string) => path.relative(REPO_ROOT, path.dirname(source)))
		);

		const jestConfig: string = fs.readFileSync(path.join(REPO_ROOT, 'jest.config.js'), 'utf8');
		const specTsConfig: string = fs.readFileSync(path.join(REPO_ROOT, 'tsconfig.spec.json'), 'utf8');

		for (const directory of owningDirectories) {
			const posixDirectory: string = directory.split(path.sep).join('/');
			expect(jestConfig).toContain(posixDirectory);
			expect(specTsConfig).toContain(posixDirectory);
			// Restating the first test's invariant against the paths the configs name: a config
			// pointing into dest would collect specs that the next build silently removes.
			expect(isInside(path.resolve(REPO_ROOT, directory), destDirectory)).toBe(false);
		}
	});
});
