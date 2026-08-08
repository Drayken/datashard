import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createIndex } from "pagefind";

/** @type {Readonly<Record<string, string>>} */
const MIME = {
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".wasm": "application/wasm",
  ".pf_meta": "application/octet-stream",
  ".pagefind": "application/octet-stream",
  ".pf_fragment": "application/octet-stream",
  ".pf_index": "application/octet-stream",
};

/**
 * Index the built site with Pagefind on `astro:build:done`, and serve that
 * index from `dist/pagefind` during `astro dev`.
 *
 * Indexing must live in the Astro build lifecycle — not a chained CLI step —
 * so GitHub/Cloudflare builds that run `astro build` still ship `/pagefind/*`.
 *
 * @returns {import("astro").AstroIntegration}
 */
export default function pagefind() {
  return {
    name: "pagefind",
    hooks: {
      /** @param {import("astro").HookParameters<"astro:server:setup">} options */
      "astro:server:setup": ({ server, logger }) => {
        const root = server.config.root;
        server.middlewares.use(async (req, res, next) => {
          const raw = req.url ?? "";
          const pathname = raw.split("?")[0] ?? "";
          if (!pathname.startsWith("/pagefind/")) {
            next();
            return;
          }

          try {
            const filePath = join(root, "dist", pathname);
            const data = await readFile(filePath);
            const type = MIME[extname(pathname)] ?? "application/octet-stream";
            res.setHeader("Content-Type", type);
            res.setHeader("Cache-Control", "no-cache");
            res.end(data);
          } catch {
            logger.warn(
              `Pagefind asset missing (${pathname}). Run a production build once to generate dist/pagefind.`
            );
            next();
          }
        });
      },

      /** @param {import("astro").HookParameters<"astro:build:done">} options */
      "astro:build:done": async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const { index, errors: createErrors } = await createIndex();
        if (!index) {
          logger.error("Pagefind failed to create index.");
          for (const error of createErrors) logger.error(error);
          throw new Error("Pagefind failed to create index.");
        }

        const { page_count, errors: addErrors } = await index.addDirectory({
          path: outDir,
        });
        if (addErrors.length > 0) {
          logger.error("Pagefind failed to index the build output.");
          for (const error of addErrors) logger.error(error);
          throw new Error("Pagefind failed to index the build output.");
        }

        const { outputPath, errors: writeErrors } = await index.writeFiles({
          outputPath: join(outDir, "pagefind"),
        });
        if (writeErrors.length > 0) {
          logger.error("Pagefind failed to write the search index.");
          for (const error of writeErrors) logger.error(error);
          throw new Error("Pagefind failed to write the search index.");
        }

        logger.info(`Pagefind indexed ${page_count} pages → ${outputPath}`);
      },
    },
  };
}
