// export const testEnvironment = 'jsdom';
// export const transform = {
//   '^.+\\.[t|j]sx?$': 'babel-jest',
// };
// export const setupFilesAfterEnv = ['<rootDir>/src/setupTests.js'];
// export const moduleNameMapper = {
//   '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
// };

export const testEnvironment = 'jsdom';
export const moduleNameMapper = {
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  '\\.(gif|ttf|eot|svg)$': 'jest-transform-stub'
};
export const transform = {
  '^.+\\.jsx?$': 'babel-jest'
};
export const setupFilesAfterEnv = ['./src/jest.setup.js'];

// import '@testing-library/jest-dom/extend-expect';