/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: true,
  },
  extends: [
    "next",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    // https://github.com/orgs/react-hook-form/discussions/8622#discussioncomment-4060570
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
  },
  ignorePatterns: [
    "**/*.config.js",
    "**/*.config.cjs",
    "packages/config/**",
    "packages/**/dist",
    "generated.ts", // subgraph-client
    "**/generated/**/*.{ts,tsx}", // api client
    "vitest.config.ts", // vitest config
    "babel.config.js", // babel config
    "tsup.config.ts", // tsup config (react-components)
    "**/build/**", // build folder
    "**/dist/**", // dist folder
    "**/payload-types.ts", // cms payload types
    "apps/kyc/**", // ignore kyc app until is addressed by the team
    "**/generated/**", // ignore generated types from contracts
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;
