/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 15000,
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: 'jest.tsconfig.json'  }]
  }
};
