module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "warn",
    "no-undef": "warn",
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
  },
};