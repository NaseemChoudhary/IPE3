# IPE03 Portal Collection

A React/Vite application with ten ready-made portals (`q1`–`q10`). Each portal loads data from a public API and displays searchable lists, filters, detail pages, and optional favourites or static pages.

## Install or Upgrade Node.js on Ubuntu

Install Node.js 24.x or upgrade an existing installation using the NodeSource repository.

**1. Download and run the setup script:**

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
```

**2. Update packages and install Node.js:**

```bash
sudo apt-get update
sudo apt-get install -y nodejs
```

**3. Verify the installed versions:**

```bash
node -v
npm -v
```

## Requirements

- Node.js 18 or newer
- npm

## Start the App

From the project directory, make the portal selector executable once:

```bash
chmod +x shell.sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Choose a Portal

The default app is the Hospital Doctor Directory in `src/App.jsx`. To use a prepared example, run:

```bash
chmod +x shell.sh   # Only needed once
./shell.sh q1
npm run dev
```

Replace `q1` with any value from `q1` to `q10`, then run `npm run dev` again if needed.

| Variant | Portal | Main route |
|---|---|---|
| `q1` | Online Shop | `/products` |
| `q2` | Course Portal | `/courses` |
| `q3` | Hospital Doctor Directory | `/doctors` |
| `q4` | Restaurant Menu | `/menu` |
| `q5` | Travel Explorer | `/destinations` |
| `q6` | Job Portal | `/jobs` |
| `q7` | News Reader | `/news` |
| `q8` | Movie Explorer | `/movies` |
| `q9` | Sports Team Portal | `/teams` |
| `q10` | Digital Library | `/books` |

The selector copies the chosen example into `src/`, so save or commit custom changes before switching variants.

## Features

- API-backed list and detail pages
- Search by title or subtitle
- Category/tag filtering when available
- Optional favourites or cart page
- Optional About, Contact, Categories, and similar pages

## Project Structure

```text
src/
├── App.jsx                 # Currently selected portal
├── main.jsx                # React entry point
├── shared/                 # Reusable portal UI, styles, and fetch hook
└── assets/
    ├── q1/ ... q10/        # Ready-made portal configurations
    └── shared/             # Shared files copied by shell.sh
```

Each portal config passes these values to `Portal`:

- `name`: application title
- `url`: API endpoint
- `pick`: extracts the records array from the API response
- `map`: converts records to the common portal shape
- `list`: sets the route and navigation label
- `pages`: adds static pages
- `fav`: enables favourites or cart functionality

To create a new portal, copy one of the files in `src/assets/q1`–`src/assets/q10`, update its API and mapping functions, and add it to the selector workflow if needed.

## Useful Commands

```bash
npm run dev       # Start the development server
npm run build     # Create a production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Check the source code with Oxlint
```

## Troubleshooting

The portals use public APIs and need an internet connection. If a list shows an error, check the connection and API availability. API response formats are converted in each variant’s `map` function.

Use exactly `q1` through `q10` with the selector, for example:

```bash
./shell.sh q10
```
