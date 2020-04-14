module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'never' },
    ],
    '@typescript-eslint/generic-type-naming': ['error', '^[A-Z][a-zA-Z]+$'],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'import/no-cycle': 'off',
    'import/no-default-export': 'error',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'react/sort-comp': 'off',
    'react/prop-types': 'off', // guaranteed by TS prop interfaces
    'no-unused-vars': 'off', // superseeded by @typescript-eslint/no-unused-vars
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
