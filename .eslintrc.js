module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['warn', 'single'],
    semi: ['warn', 'never']
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
