// Temporary: Prettier until oxfmt gains Astro support
// (https://github.com/oxc-project/oxc/issues/19715).
/** @type {import("prettier").Config} */
export default {
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: false,
  trailingComma: "es5",
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        bracketSameLine: true,
      },
    },
    {
      files: ["*.md", "*.mdx"],
      options: {
        proseWrap: "preserve",
      },
    },
  ],
  tailwindStylesheet: "./src/css/global.css",
  tailwindFunctions: ["clsx", "cn", "cva", "tw"],
};
