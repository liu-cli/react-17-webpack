// const fabric = require('@umijs/fabric');

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  parserOptions: {
    project: './tsconfig.json',
  },
  // extends: [require.resolve('@umijs/fabric/dist/eslint')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    // indent: 'off',
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    'no-return-assign': 0,
    semi: ['error', 'always'],
    // 会误伤@
    'import/no-unresolved': 'off',
    'no-confusing-arrow': 0,
    'no-console': 0,
    'max-len': ['error', { code: 120, ignoreComments: true, ignoreStrings: true }],
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'no-case-declarations': 'off',
    'no-param-reassign': 'off',
    'no-useless-escape': 'off',
    'no-lonely-if': 'off',
    'no-undef': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': ['error'],
    'react/jsx-closing-bracket-location': [2],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-bind': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react/function-component-definition': 0,
    'react/no-unused-class-component-methods': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-multi-comp': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/no-unstable-nested-components': 0,
  },
};