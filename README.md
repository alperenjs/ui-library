# UI Library

A modern React UI component library built with Vite, shadcn/ui, and Tailwind CSS.

## Features

- ⚡️ Built with Vite for fast development and optimized builds
- 🎨 shadcn/ui components with Tailwind CSS
- 📦 Library mode with ES and UMD builds
- 🔷 TypeScript support with type definitions
- 🎯 React 19.2.1 compatible
- 🌙 Dark mode support
- ♿️ Accessible components

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

This will generate:
- `dist/index.es.js` - ES module build
- `dist/index.umd.js` - UMD build
- `dist/index.d.ts` - TypeScript definitions
- `dist/style.css` - Compiled CSS

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'ui-library'

<Button variant="default" size="default">Click me</Button>
```

### Input

A flexible input component with validation states.

```tsx
import { Input } from 'ui-library'

<Input type="text" placeholder="Enter text" />
```

## Usage

After building, import the library in your project:

```tsx
import { Button, Input } from 'ui-library'
import 'ui-library/style.css'
```

## Project Structure

```
ui-library/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   ├── theme.css
│   │   └── styles.css
│   └── index.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
└── components.json
```

## License

MIT
