module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-useless-escape': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/no-deprecated': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-children-prop': 'off',
    'react/no-string-refs': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'semi': 'off',
  },
};
