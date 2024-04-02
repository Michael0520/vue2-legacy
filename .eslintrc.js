module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    'import/extensions': ['.vue', '.js', '.ts'],
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'],
    'arrow-parens': 0,
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none', // 'none' or 'semi' or 'comma'
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi', // 'semi' or 'comma'
        requireLast: false,
      },
    }],
    '@typescript-eslint/interface-name-prefix': 0,
    'import/prefer-default-export': 0,
    'no-duplicate-imports': 'error',
    'no-shadow': ['error', { allow: ['state'] }],
    'no-useless-constructor': 0,
    'class-methods-use-this': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
    'max-len': ['error', { code: 140, ignorePattern: 'd="[\\s\\S]*?"' }],
    'no-mixed-operators': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
