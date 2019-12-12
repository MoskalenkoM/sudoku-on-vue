module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/strongly-recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    allowImportExportEverywhere: false,
    sourceType: "module"
  },
  plugins: ["vue"]
};
