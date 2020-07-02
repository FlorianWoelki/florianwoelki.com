module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'prettier',
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:vue/strongly-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
