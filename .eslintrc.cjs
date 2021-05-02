module.exports = {
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true,
    "browser": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "react-hooks",
    "import",
    "testing-library",
    "jest",
    "jest-dom"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "rules": {
    "no-console": 2,
    "newline-before-return": 2,
    "newline-after-var": 2,
    "padded-blocks": 0,
    "no-multi-spaces": 2,
    "no-trailing-spaces": 2,
    "class-methods-use-this": 0,
    "require-jsdoc": 0,
    "template-curly-spacing": 0,
    "default-param-last": 1,
    "no-implicit-coercion": [
      2,
      {
        "allow": [
          "!!"
        ]
      }
    ],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          [
            "parent",
            "sibling",
            "index",
            "internal"
          ],
          "object"
        ],
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "react+(|-dom)",
            "group": "external",
            "position": "before"
          }
        ]
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
    // React
    "react/prefer-stateless-function": 1,
    "react/no-danger": 1,
    "react/prop-types": 1,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "warn",
    "react/no-unsafe": "warn",
    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
