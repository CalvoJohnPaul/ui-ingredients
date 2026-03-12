import type {RequestHandler} from '@sveltejs/kit';

const content = `
  User-agent: *
  Allow: /
  Host: ui-ingredients.xyz
  Sitemap: https://ui-ingredients.xyz/sitemap.xml
`
  .split('\n')
  .map((s) => s.trim())
  .filter(Boolean)
  .join('\n');

export const prerender = true;
export const GET: RequestHandler = () => {
  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
