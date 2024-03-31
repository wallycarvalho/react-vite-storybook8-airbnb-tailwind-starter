module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:storybook/recommended",
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.js',
    'postcss.config.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": true,
    "tsconfigRootDir": __dirname,
  },
  plugins: [
    'react-refresh',
    "react",
    "@typescript-eslint"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
