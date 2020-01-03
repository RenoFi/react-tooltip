module.exports = {
  transform: {'^.+\\.(ts|tsx)?$': 'ts-jest'},
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testEnvironment: 'jsdom',
  testRegex: '/src/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
