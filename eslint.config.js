const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["AD361Lecture02/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "eqeqeq": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.node,
    },
    rules: {
      "eqeqeq": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
