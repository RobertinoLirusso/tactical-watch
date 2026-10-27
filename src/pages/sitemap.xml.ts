import type { APIRoute } from "astro";

const routes = ["/"];

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = routes
    .map(
      (path) =>
        `  <url>\n    <loc>${new URL(path, site).href}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
