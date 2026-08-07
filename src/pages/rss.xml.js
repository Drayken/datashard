import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/consts";

/** @type {import("astro").APIRoute} */
export async function GET(context) {
  if (!context.site) {
    throw new Error("site is not configured in astro.config");
  }

  const echoes = await getCollection("echoes");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: echoes.map((echo) => ({
      ...echo.data,
      link: `/echoes/${echo.id}/`,
    })),
  });
}
