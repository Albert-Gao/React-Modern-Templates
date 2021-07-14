/*eslint-env node*/

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest-setup.js'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
}
