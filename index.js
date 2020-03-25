const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const localTsRules = require('./rules/ts');

const ownRules = [
  './rules/best-practices',
  './rules/errors',
  './rules/es6',
  './rules/imports',
  './rules/node',
  './rules/strict',
  './rules/style',
  './rules/variables',
  './rules/react',
  './rules/lodash',
  './rules/react-a11y',
].map(require.resolve);

let tsOverrides = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    excludedFiles: '*.d.ts',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest', 'prettier'],
    parserOptions: {
      sourceType: 'module',
    },
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
      ...tsEslintPlugin.configs['recommended-requiring-type-checking'].rules,
      ...localTsRules.rules,
    },
  },
];

module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest', 'prettier'],
  extends: [
    ...ownRules,
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
  overrides: tsOverrides,
};
