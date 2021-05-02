module.exports = {
  rootDir: "../../",
  verbose: true,
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  moduleDirectories: [
    "node_modules",
    "bower_components",
    "shared",
  ],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/config/",
    "<rootDir>/coverage/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/assets/",
    "<rootDir>/src/routes/index.js",
    "<rootDir>/src/pages",
  ]
}
