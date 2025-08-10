# psp_dada's personal pages <!-- omit in toc -->

This file provides the related information about the project, including the project structure, commands, and links to deploy or run the project.

# Contents <!-- omit in toc -->

- [Pre-commit](#pre-commit)
- [Prettier](#prettier)
- [Starlight Starter Kit: Basics](#starlight-starter-kit-basics)
  - [🚀 Project Structure](#-project-structure)
  - [🧞 Commands](#-commands)
  - [👀 Want to learn more?](#-want-to-learn-more)

## Pre-commit

This project uses [pre-commit](https://pre-commit.com/) to run checks before committing code. To set it up, run:

```bash
# 1. Install pre-commit
pip install pre-commit
pre-commit --version

# 2. Add a pre-commit configuration
# create a file named .pre-commit-config.yaml
pre-commit sample-config

# 3. Install the git hook scripts
pre-commit install

# 4. Run against all the files
pre-commit run --all-files
```

## Prettier

This project uses [Prettier](https://prettier.io/) for code formatting. To set it up, run:

```bash
# 1. Install Prettier
npm install --save-dev --save-exact prettier

# 2. Create a configuration file
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"

# 3. Add a format script
echo '{
  "scripts": {
    "format": "prettier --write ."
  }
}' > package.json

# 4. Run Prettier
npx prettier . --write
```

## Starlight Starter Kit: Basics

Set the npm registry to the mirror:

```bash
npm config set registry https://registry.npmmirror.com/
```

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

### 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
