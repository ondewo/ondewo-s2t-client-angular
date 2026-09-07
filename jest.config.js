/**
 * Jest configuration for the hand-written sources of this package: the Keycloak bearer-auth
 * surface (src/auth), the usage example (examples/) and the build-layout guard (tests/).
 * Uses jest-preset-angular so the Angular/rxjs/@ngx-grpc ESM is transformed correctly; every
 * generated protobuf/gRPC-web stub is excluded from coverage.
 */

/**
 * Filename regexes that identify a file as an emitted *generated stub* rather than hand-written
 * code: `.pb.ts` / `.pbsc.ts` / `.pbconf.ts` come from the @ngx-grpc generator, while `_pb.js`,
 * `_pb.ts`, `_pb.d.ts`, `*ServiceClientPb.ts` and `_grpc_web_pb.*` come from protoc plus
 * protoc-gen-grpc-web. Every one of them is rewritten wholesale by the codegen on each
 * ondewo-s2t-api bump, is never edited by hand, and holds no logic of ours worth asserting on.
 *
 * They are spread into `coveragePathIgnorePatterns` below so the 100% `coverageThreshold` stays a
 * meaningful gate on the hand-written surface: without the exclusion the thousands of untested
 * generated lines would make the global threshold unreachable and force it to be lowered.
 * @type {string[]}
 */
const GENERATED_STUB_PATTERNS = [
	'\\.pb\\.ts$',
	'\\.pbsc\\.ts$',
	'\\.pbconf\\.ts$',
	'_pb\\.js$',
	'_pb\\.ts$',
	'_pb\\.d\\.ts$',
	'.*ServiceClientPb\\.ts$',
	'_grpc_web_pb\\.(js|ts|d\\.ts)$'
];

/** @type {import('jest').Config} */
module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	roots: ['<rootDir>/src/auth', '<rootDir>/examples', '<rootDir>/tests'],
	testMatch: ['**/*.spec.ts'],
	moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage',
	coverageReporters: ['text', 'text-summary', 'lcov'],
	// Every hand-written .ts under the gated roots, so a NEW untested file shows up at 0% and
	// trips the 100% threshold below instead of silently vanishing from the report.
	collectCoverageFrom: ['src/auth/**/*.ts', 'examples/**/*.ts', 'tests/**/*.ts', '!**/*.spec.ts'],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/src/ondewo-s2t-api/',
		'/api/',
		'\\.spec\\.ts$',
		...GENERATED_STUB_PATTERNS
	],
	coverageThreshold: { global: { branches: 100, functions: 100, lines: 100, statements: 100 } }
};
