module.exports = {
  rootDir: "../../",
  automock: true,
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFiles: [
    "<rootDir>/src/setupTests.js"
  ],
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  moduleDirectories: [
    "node_modules",
    "bower_components"
  ],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**"
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/config/",
    "<rootDir>/coverage/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/assets/",
    "<rootDir>/src/routes/index.js",
    "<rootDir>/src/utils/constants.js",
    "<rootDir>/src/pages",
    "<rootDir>/vite.config.js"
  ],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  }
}
