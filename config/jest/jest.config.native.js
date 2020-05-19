module.exports = {
  preset: 'react-native',
  rootDir: '../../',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  displayName: {
    name: 'MainApp',
    color: 'blue',
  },
  // bail: true,  //  stop at first failing test
  // automock: false,
  // notify: true,
  // notifyMode: 'failure',
  // // setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  // // testEnvironment: 'jest-environment-jsdom-fourteen',
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  //   '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  //   '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
  //     '<rootDir>/config/jest/fileTransform.js',
  // },
  // transformIgnorePatterns: [
  //   '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
  //   '^.+\\.module\\.(css|sass|scss)$',
  // ],
  // modulePaths: [],
  moduleNameMapper: {
    '^react-native$': 'react-native',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  // moduleFileExtensions: [
  //   'web.js',
  //   'js',
  //   'web.ts',
  //   'ts',
  //   'web.tsx',
  //   'tsx',
  //   'json',
  //   'web.jsx',
  //   'jsx',
  //   'node',
  // ],
  // watchPlugins: [
  //   'jest-watch-typeahead/filename',
  //   'jest-watch-typeahead/testname',
  // ],
};
