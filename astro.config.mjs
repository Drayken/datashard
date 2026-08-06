import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [mdx(), sitemap()],

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Noto Serif Variable",
      cssVariable: "--font-noto-serif",
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/noto-serif-normal.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/noto-serif-italic.woff2"],
            weight: "100 900",
            style: "italic",
            display: "swap",
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
