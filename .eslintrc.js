// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  ignorePatterns: ["/dist/*"],
  globals: {
    myGlobalVariable: "readonly",
  },
  env: {
    node: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "warn",
  },
};
