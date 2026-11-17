# Demo notes: where everything lives

A cheat sheet for pointing at things live. Run it with `npm run dev`, then open http://localhost:3000.

## The three pages

| Page | Address | File |
|---|---|---|
| Home | `/` | `app/page.tsx`: the big "Study Buddy" title, the blob cluster and the "Find a buddy" button |
| Browse buddies | `/browse` | `app/browse/page.tsx`: only the heading. The chips and cards come from `components/BrowseBuddies.tsx` |
| My profile | `/profile` | `app/profile/page.tsx`: the big blob and heading. The form is `components/ProfileForm.tsx` |

**The nav bar** is `components/NavBar.tsx`. It appears on every page because `app/layout.tsx` (the file that wraps every page) puts it above the page content. The current page's link turns tomato.

## What `data.ts` holds

`data.ts` (in the top folder) is the fake data. It has two things:

- **`buddies`**: 8 made-up study buddies. Each one has a name, course, module, free hours and the look of their blob (shape, colour and eyes).
- **`courses`**: the list of courses that get a filter chip. Architecture is on the list but nobody studies it yet, so clicking it shows the empty state.

On 3 Dec this file gets swapped for a real database. The pages stay the same.

## Where the filter logic lives

`components/BrowseBuddies.tsx`.

- `useState` remembers which chip you picked (it starts on "All courses").
- One line does the filtering: `const shown = ...`. If you picked "All courses" it keeps everyone, otherwise it keeps only the buddies whose course matches the chip.
- If nobody matches, it shows "No one's free yet. Check back after lectures." with a crayon doodle.

## Where the blob avatars live

`components/BlobAvatar.tsx` draws every blob as a small picture made of code (an inline SVG), so there are no photo files.

- Six shapes: flower, cloud, spiky, star, round and arch.
- Three kinds of eyes: wide, dots and sleepy.
- Four colours from the brand: tomato, cobalt, bubblegum and forest.

Each buddy's blob is chosen in `data.ts`. The card that shows a buddy (blob, name, course, module, free hours) is `components/BuddyCard.tsx`.

## Where the brand lives

- **The rules**: the Design section in `CLAUDE.md`. Claude reads this before every change.
- **The colours and sticker styles**: `app/globals.css`. `sticker-card` and `sticker-button` are the thick-outline, hard-shadow styles used on every card and button.
- **The fonts**: Fredoka for headings and DM Sans for body, loaded at the top of `app/layout.tsx`.
- **The crayon doodles**: `components/Doodle.tsx` (the squiggle under the Home title, the burst next to it, the loop in the empty state).
- **The favicon**: `app/icon.svg`.

## Things to click live

1. On Browse, click **Economics**: only Maya and Leo stay.
2. Click **Architecture**: the empty state appears.
3. On My profile, fill in the form and press **Save my profile**: your card appears underneath.
4. Refresh the page: your card is gone. Nothing is saved yet. That's 3 Dec.

## The commit history mirrors the demo

| Commit | Demo step |
|---|---|
| Initial commit from Create Next App | Create the Next.js app |
| Add SPEC.md for Study Buddy Finder | Write the spec |
| Add CLAUDE.md with project overview, commands and folder structure | `/init` |
| Add Design section to CLAUDE.md from the moodboard | Brand kit from the moodboard, then save |
| Add Home, Browse and My profile pages with a shared nav bar | Plan the pages, build Browse from the sketch, then save |
| Add 8 sample study buddies with blob avatars and a course filter | Fake data and the filter, then save |
| Fix the layout on narrow screens | Phone check, then save |
| Consistency pass against the Design section and the tells checklist | Extra: prompt 7 and the tells list |
