module.exports = {
  env: {
    node: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: "2015"
  },
  rules: {
    "prettier/prettier": ["error", {
      singleQuote: true,
      parser: "flow"
    }],
    indent: ["error", 2],
    "max-depth": ["error", 2],
    "max-lines-per-function": ["error", 15],
    "max-params": ["error", 3],
    quotes: ["error", "single"]
  },
  overrides: [{
    files: "__tests__/*",
    env: {
      jest: true
    },
    rules: {
      "max-lines-per-function": ["error", 100]
    }
  }]
};