import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import { importX } from "eslint-plugin-import-x";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const sharedGlobals = {
  ...globals.browser,
  ...globals.node,
};

export default defineConfig(
  {
    ignores: [".astro/**", "dist/**", "node_modules/**", "pnpm-lock.yaml"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: sharedGlobals,
    },
  },
  {
    files: ["**/*.{ts,mts,cts}"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: sharedGlobals,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/array-type": ["warn", { default: "generic" }],
      "@typescript-eslint/consistent-type-definitions": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/require-array-sort-compare": "warn",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,astro}"],
    plugins: {
      "import-x": importX,
      unicorn: eslintPluginUnicorn,
    },
    settings: {
      "import-x/core-modules": [
        "astro:actions",
        "astro:assets",
        "astro:content",
        "astro:i18n",
        "astro:middleware",
        "astro:schema",
        "astro:transitions",
      ],
    },
    rules: {
      "import-x/no-duplicates": "warn",
      "unicorn/no-await-in-promise-methods": "warn",
      "unicorn/no-empty-file": "warn",
      "unicorn/no-invalid-fetch-options": "warn",
      "unicorn/no-invalid-remove-event-listener": "warn",
      "unicorn/no-new-array": "warn",
      "unicorn/no-single-promise-in-promise-methods": "warn",
      "unicorn/no-thenable": "warn",
      "unicorn/no-unnecessary-await": "warn",
      "unicorn/no-useless-fallback-in-spread": "warn",
      "unicorn/no-useless-length-check": "warn",
      "unicorn/no-useless-spread": "warn",
      "unicorn/prefer-set-size": "warn",
      "unicorn/prefer-string-starts-ends-with": "warn",
    },
  },
  eslintPluginAstro.configs.recommended,
  eslintConfigPrettier
);
