module.exports = {
  roots: ["<rootDir>/src/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
  ],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  }
}