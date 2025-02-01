// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:jest/recommended", "prettier"],
  ignorePatterns: ["/dist/*"],
  globals: {
    myGlobalVariable: "readonly",
  },
  env: {
    jest: true,
    node: true,
  },
  plugins: ["jest", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "warn",
  },
};
