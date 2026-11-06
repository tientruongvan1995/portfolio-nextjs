// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  plugins: ["reactotron", "prettier"],
  rules: {
    // eslint-import
    "import/order": [
      "error",
      {
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        "groups": [["builtin", "external"], "internal", "unknown", ["parent", "sibling"], "index"],
        "distinctGroup": false,
        "pathGroups": [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next{,-*}",
            group: "external",
            position: "before",
          },
          {
            pattern: "expo{,-*}",
            group: "external",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "unknown",
            position: "after",
          },
        ],
        "pathGroupsExcludedImportTypes": ["react", "next", "next-*"],
      },
    ],
    "import/newline-after-import": 1,
  },
}
