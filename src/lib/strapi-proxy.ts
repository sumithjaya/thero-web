// pages/api/strapi-proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';
const STRAPI_BASE = process.env.STRAPI_API_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!STRAPI_BASE || !STRAPI_TOKEN) return res.status(500).json({ error: 'misconfigured' });

  const targetPath = (req.url ?? '').replace(/^\/api\/strapi-proxy/, '') || '/api/wealfy-testimonials';
  const url = `${STRAPI_BASE.replace(/\/+$/,'')}${targetPath}`;

  try {
    const proxyRes = await fetch(url, {
      method: req.method,
      headers: { Authorization: `Bearer ${STRAPI_TOKEN}`, Accept: 'application/json' },
      body: ['GET','HEAD'].includes(req.method ?? '') ? undefined : req.body,
    });

    const contentType = proxyRes.headers.get('content-type') ?? 'application/json';
    const text = await proxyRes.text();
    res.status(proxyRes.status).setHeader('content-type', contentType).send(text);
  } catch (err) {
    console.error('[strapi-proxy] error', err);
    res.status(502).json({ error: 'bad gateway contacting Strapi' });
  }
}
