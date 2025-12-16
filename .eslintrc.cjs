const path = require("node:path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [path.join(__dirname, "tsconfig.eslint.json")],
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint", "react-hooks", "jsx-a11y", "import"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/no-unescaped-entities": "off",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-var-requires": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "import/no-unresolved": "error",
    "import/named": "error",
    "prefer-const": "error",
    "no-var": "error",
    "react/display-name": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: [path.join(__dirname, "tsconfig.eslint.json")],
      },
    },
  },
};
