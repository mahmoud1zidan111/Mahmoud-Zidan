# Mahmoud Zidan Portfolio SEO Plan

## Technical SEO

- Keep one canonical production domain in `VITE_PUBLIC_SITE_URL`, `public/sitemap.xml`, and `public/robots.txt`.
- Submit `https://mahmoud-zidan.vercel.app/sitemap.xml` in Google Search Console after deployment.
- Keep route metadata in `src/seo/siteConfig.js`; every public route should have a unique title, description, canonical path, and schema.
- Validate JSON-LD with Google's Rich Results Test and Schema.org validator after deployment.
- Avoid duplicate metadata by using the shared `SEO` component once per route.

## Content SEO

- Primary entity: Mahmoud Zidan.
- Main search intents: React developer, Full Stack Developer, portfolio, JavaScript developer, Cairo/Egypt developer.
- Keep the homepage H1 focused on the personal brand and role.
- Add detailed case-study pages later for high-value projects; each project should have problem, stack, role, outcome, demo, and repository.
- Keep alt text descriptive: person images identify Mahmoud Zidan; project images identify the project and owner.

## Performance SEO

- Use `VITE_IMAGEKIT_URL_ENDPOINT` to serve optimized images through ImageKit.
- ImageKit transformations should use `f-auto`, `q-80` to `q-85`, and explicit widths.
- Keep hero image eager and all non-critical images lazy.
- Route-level code splitting is enabled in `src/App.jsx`.
- Vendor manual chunks are configured in `vite.config.js` for long-term caching.
- Replace remote icon font usage with local SVG/icon components later if Lighthouse flags render-blocking CSS.

## Accessibility

- Keep one H1 per route.
- Use semantic `section`, `nav`, `footer`, and labelled form controls.
- Preserve visible focus states for links, buttons, and form fields.
- Test keyboard navigation through navbar, project buttons, modals, and contact form.

## Google Discoverability

- Connect the same name, profile photo, job title, and portfolio URL across GitHub, LinkedIn, resume PDF, and Vercel.
- Add the portfolio URL to GitHub profile README and LinkedIn Featured section.
- Create backlinks from GitHub repositories, project live demos, README files, LinkedIn posts, and developer profiles.
- Use Google Search Console URL Inspection after each major deployment.

## Deployment

- Vercel headers are configured in `vercel.json`.
- Static assets and local images use long-term cache headers.
- SPA rewrites preserve React Router routes.
- Add Google verification with one of these:
  - Search Console HTML file in `public/`
  - `<meta name="google-site-verification" content="..." />` in `index.html`
  - DNS TXT record, preferred for custom domains

## Recommended Next Steps

- Move the Forminit token out of `VITE_` frontend env usage and proxy the contact form through a serverless function.
- Add a custom domain using your exact name, such as `mahmoudzidan.dev` or `mahmoudzidan.com`.
- Add project detail routes for `/projects/doctor-ai`, `/projects/nexcent`, and other major projects.
- Add a short downloadable resume page with indexable HTML content, not only a PDF.
