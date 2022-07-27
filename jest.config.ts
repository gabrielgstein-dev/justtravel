import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  modulePaths: ['src'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@theme$': '<rootDir>/src/theme/',
    '^@model(.*)$': '<rootDir>/src/model$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
  },
}

export default config
