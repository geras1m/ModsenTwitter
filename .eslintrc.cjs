module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'react-refresh'
  ],
  settings: {
  'import/resolver': {
    node: {
      paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
    },
    typescript: {
      project: './tsconfig.json',
    },
    alias: {
      map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'],
    },
  },
},
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^react", "^@?\\w"],
          ["^@/"],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.?(css)$"]
        ]
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "prefer-const": "error",
    "no-console": "warn",
    "no-unused-vars": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function"
      }
    ],
    "simple-import-sort/exports": "error",
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/prefer-default-export": "off",
    'no-shadow': "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/jsx-props-no-spreading": "warn",
    "react/no-array-index-key": "warn"
  },
}
