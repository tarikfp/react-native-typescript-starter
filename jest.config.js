// jest.config.js
const { defaults: tsjPreset } = require("ts-jest/presets");
module.exports = {
  ...tsjPreset,
  verbose: true,
  preset: "react-native",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
    },
  },
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|@yz1311/react-native-wheel-picker|react-native-blob-util|react-native-pdf|@react-native-community/datetimepicker|react-navigation|react-native-device-info|@react-native-community/masked-view|react-native-skeleton-placeholder/lib/SkeletonPlaceholder.js|engine.io-client|engine.io-parser|socket.io-parser|@react-navigation/.*|@unimodules/.*)",
  ],
  moduleNameMapper: {
    "react-i18next": "<rootDir>/__mocks__/i18n.ts",
    "@react-native-community/datetimepicker":
      "<rootDir>/__mocks__/DateTimePicker.tsx",
    "^@api(.*)$": "<rootDir>/src/api$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@lib(.*)$": "<rootDir>/src/lib$1",
    "^@localization(.*)$": "<rootDir>/src/localization$1",
    "^@navigation(.*)$": "<rootDir>/src/navigation$1",
    "^@rtk(.*)$": "<rootDir>/src/rtk$1",
    "^@screens(.*)$": "<rootDir>/src/screens$1",
    "^@theme(.*)$": "<rootDir>/src/theme$1",
    "^@utils$": "<rootDir>/src/utils/index",
  },
  setupFiles: [
    "./jest.setup.js",
    "<rootDir>/node_modules/react-native/jest/setup.js",
    "<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(test).ts?(x)",
    "**/?(*.)+(test).js?(x)",
  ],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
  collectCoverageFrom: ["src/components/**/*.{ts,tsx}"],
  coverageReporters: ["text", "cobertura", "lcov"],
  reporters: ["default", "jest-junit"],
  testResultsProcessor: "jest-sonar-reporter",
};
