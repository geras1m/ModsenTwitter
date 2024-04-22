/** @type {import("jest").Config} */

export default {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  presets: 'ts-jest/presets/default-esm',
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta', // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: { metaObjectReplacement: { url: 'https://www.url.com' } },
            },
          ],
        },
      },
    ],
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '^@/(.*)': '<rootDir>src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
