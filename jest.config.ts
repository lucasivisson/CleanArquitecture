/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // The test environment that will be used for testing
  testEnvironment: "node",

  // A map from regular expressions to paths to transformers
  transform: {
    ".+\\.ts$": "ts-jest",
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
