module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['react', '@typescript-eslint', '@tanstack/query'],
  rules: {
    // Custom prettier settings, and warn only since it's formatting
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],

    // React 17+ uses automatic runtime, so no 'React' import necessary
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // No prop-types with typescript
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // allow .tsx file extensions for JSX
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],

    // expect all components to be arrow functions for consistency
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Remove missing file extension errors for .ts and .js files
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
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  env: {
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    // fixes issue where modules can't be found without extensions
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    // Whether one or multiple styles are exported, we want to import consistently.
    // Also, `index.ts` files commonly re-export default exports for easier finding
    // of files (e.g. `Button.tsx`, and `Text.tsx` over `index.tsx` for both).
    {
      files: ['*.styles.ts', 'index.ts'],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
  root: true,
}
