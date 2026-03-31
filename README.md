# Personal Portfolio Website

A minimal, black-and-white academic portfolio website built with Next.js, Tailwind CSS, and a file-based JSON CMS. Deployed on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing Content (CMS)

All site content is stored as JSON files in the `/content/` directory. To update the website, edit the relevant JSON file and push to git — Vercel auto-deploys on every push.

### Content Files

| File | Description |
|------|-------------|
| `content/about.json` | Name, title, bio paragraphs, photo path, social links |
| `content/research.json` | Research overview text, dissertation URL, CV URL |
| `content/experience.json` | Work history entries (company, role, period) |
| `content/projects.json` | Selected projects with images and paper links |
| `content/press.json` | Media mentions by year |
| `content/awards.json` | Awards and honors |
| `content/talks.json` | Invited talks by year and venue |
| `content/teaching.json` | Teaching history, reviewing history, committee service |
| `content/team.json` | Team members with photos and roles |
| `content/features.json` | Shipped features/products with images |
| `content/personal.json` | Personal photo gallery |

### Adding Images

Place images in the `public/images/` directory:

- `public/images/profile.jpg` — Profile photo
- `public/images/projects/` — Project images
- `public/images/team/` — Team member photos
- `public/images/features/` — Feature screenshots
- `public/images/personal/` — Personal gallery photos

Reference them in JSON as `/images/filename.jpg` (without the `public` prefix).

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Deploy — Vercel auto-detects Next.js and configures everything
4. Every push to `main` triggers a new deployment

### Manual Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Playfair Display** (headings) + **Inter** (body) from Google Fonts

## Project Structure

```
├── content/          # JSON content files (CMS)
├── public/images/    # All images
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components for each section
│   └── lib/          # Utility functions
├── next.config.ts
├── package.json
└── tsconfig.json
```
