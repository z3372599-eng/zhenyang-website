# Hebei Zhenyang Multilingual Website V1.0

This is a static Next.js website for Hebei Zhenyang Electric Technology Co., Ltd.

## Features

- Languages: Chinese, English, Vietnamese
- Pages: Home, About Us, Products, Certificates, Contact Us
- Product content managed in JSON files under `locales/`
- No database
- No admin system
- Static deployment supported

## Product Scope

V1.0 only includes:

- Strain Clamp
- Parallel Groove / Branch Connector Clamp
- Insulation Piercing Grounding Clamp
- Safety & Equipment Sign
- General Safety Helmet

Product content is based on the Vietnam product catalogue. Unknown parameters are left as:

`Please contact us for technical details.`

## Run Locally

```bash
pnpm install
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
pnpm build
```

Because `next.config.mjs` uses `output: 'export'`, the static site is exported to:

```text
out/
```

## Deployment

Recommended static deployment options:

- Vercel
- Netlify
- Cloudflare Pages
- Alibaba Cloud OSS + CDN
- Any static web hosting service

Deploy the generated `out/` directory for static hosting.

## Contact Information

The following fields are intentionally left as placeholders until confirmed:

- Phone
- Email
- WhatsApp
- Address

