# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview

Study Buddy Finder helps UCL students find someone to study with. See `SPEC.md` for the pages (Home, Browse buddies, My profile) and features (browse student cards, filter by course, edit my profile).

This is a fresh Next.js app created with `create-next-app` (default options): App Router, TypeScript, Tailwind CSS and ESLint. There is no backend, database or login yet.

## Commands

- `npm run dev`: start the dev server at http://localhost:3000
- `npm run build`: production build (also type-checks)
- `npm run start`: serve the production build
- `npm run lint`: run ESLint

## Folder structure

- `app/page.tsx`: the home page (`/`)
- `app/layout.tsx`: the root layout that wraps every page (fonts, `<html>` and `<body>`)
- `app/globals.css`: global styles and the Tailwind import
- `public/`: static files such as images and icons
- `SPEC.md`: what the app should do
- `AGENTS.md`: Next.js notes for coding agents (written by `next dev`)

A new page goes in its own folder with a `page.tsx`, for example `app/browse/page.tsx` becomes `/browse`.

## Design

Use this on every page. Picked from the moodboard: match the vibe, don't copy any image.

**Personality:** playful, warm, hand-made. Like a sticker book.

**Colours** (exact hex values from the moodboard; no gradients, ever):

| Name | Hex | Use it for |
|---|---|---|
| Cream | `#F7ECE6` | page background |
| Paper | `#FFFCF3` | card and input fill (a lighter cream) |
| Ink | `#181818` | text, outlines and sticker shadows |
| Tomato | `#EA602A` | main colour: primary buttons, the active nav link, highlights |
| Cobalt | `#185AD8` | accent: selected filter chips, links |
| Bubblegum | `#D860A2` | accent: avatars, small highlights |
| Forest | `#1E4836` | sparingly: one avatar, small details |

Use them as Tailwind colours named `cream`, `paper`, `ink`, `tomato`, `cobalt`, `bubblegum`, `forest`. Put ink text on tomato and bubblegum (white text on them is hard to read). White text is fine on cobalt and forest.

**Type:**

- Headings: **Fredoka** (chunky, rounded), weight 600–700, loaded with `next/font/google`.
- Body: **DM Sans** (plain, readable), loaded with `next/font/google`.
- No other fonts.

**Signature details:**

1. **Blob buddies.** Every study buddy has a blob-character avatar with eyes, drawn as inline SVG in different colours and shapes (flower, cloud, spiky, star, round, arch). No photos.
2. **Stickers.** Cards and buttons look like stickers: thick 3px ink outline, rounded corners, and a hard ink shadow offset 4px down and right (no blur). Small crayon-scribble doodles as decoration, used sparingly: one or two per page at most.

**Voice:** friendly and human. Buttons say what happens: "Find a buddy", "Save my profile", never "Submit". Empty filter: "No one's free yet. Check back after lectures."

**Never:** gradients, emoji as icons, glassy or blurred cards, lorem ipsum, a different button style on each page.
