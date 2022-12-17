module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  ignorePatterns: ["jest.config.js"],
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["import", "prettier"],
  rules: {
    "arrow-body-style": "off",
    "import/newline-after-import": ["error", { count: 1 }],
    "max-len": ["error", { code: 120 }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "while", next: "*" },
      { blankLine: "always", prev: "if", next: "*" },
      { blankLine: "always", prev: "*", next: "if" },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "while" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "for" },
      { blankLine: "always", prev: "for", next: "*" },
    ],
    "prefer-arrow-callback": "off",
    "prettier/prettier": "error",
  },
};
