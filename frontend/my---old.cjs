module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
  };