module.exports = {
  rootDir: "../../",
  verbose: true,
  testEnvironment: "jsdom",
  collectCoverage: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/react"],
  setupFiles: [
    "<rootDir>/src/setupTests.js"
  ],
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  moduleDirectories: [
    "node_modules"
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
    "<rootDir>/src/services/",
    "<rootDir>/src/hooks/",
    "<rootDir>/src/store.js",
    "<rootDir>/src/routes/index.js",
    "<rootDir>/src/utils/constants.js",
    "<rootDir>/src/pages",
    "<rootDir>/vite.config.js"
  ],
  moduleNameMapper: {
    "^.+\\.(css|scss|sass)$": "identity-obj-proxy"
  }
};
