module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'prettier',
    'standard',
    'cypress',
  ],
  env: {
    node: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    System: true,
    Set: true,
    Map: true,
    Promise: true,
    window: true,
  },
  rules: {
    'prettier/prettier': [
      1,
      {
        printWidth: 80,
        trailingComma: 'es5',
        singleQuote: true,
        jsxBracketSameLine: true,
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: [
          '/^displayName+$/',
          '/^propTypes+$/',
          '/^contextTypes+$/',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  },
};
