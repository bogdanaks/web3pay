module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir : __dirname, 
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "simple-import-sort"],
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "semi": [
      "error",
      "never"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
};
