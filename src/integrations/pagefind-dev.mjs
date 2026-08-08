import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

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
 * Serve a previously built Pagefind index from `dist/pagefind` during `astro dev`.
 * Run `pnpm build` once first so the index exists; results stay stale until the next build.
 * @returns {import("astro").AstroIntegration}
 */
export default function pagefindDev() {
  return {
    name: "pagefind-dev",
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
              `Pagefind asset missing (${pathname}). Run pnpm build once to generate dist/pagefind.`
            );
            next();
          }
        });
      },
    },
  };
}
