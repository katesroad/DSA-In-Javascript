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
  plugins: ["prettier"],
  rules: {
    "max-len": ["error", { code: 120 }],
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
