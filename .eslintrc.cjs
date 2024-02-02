const config = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '12'
  },
  rules: {
    'prettier/prettier': 'error'
  }
}

module.exports = config
