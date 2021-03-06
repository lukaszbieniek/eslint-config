module.exports = {
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import', 'node', 'promise', 'unicorn'],
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  rules: {
    'prettier/prettier': 0,
    'unicorn/no-array-callback-reference': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/prevent-abbreviations': 0,
  },
}
