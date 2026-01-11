# UI Library

A modern React UI component library built with Vite, shadcn/ui, and Tailwind CSS.

## Features

- ⚡️ Built with Vite for fast development and optimized builds
- 🎨 shadcn/ui components with Tailwind CSS
- 📦 Library mode with ES and UMD builds
- 🔷 TypeScript support with type definitions
- 🎯 React 18+ and 19+ compatible
- 🌙 Dark mode support
- ♿️ Accessible components

## Installation

```bash
npm install @alperenjs/ui-library
```

## Usage

**⚠️ IMPORTANT: You must import the CSS file for styles to work!**

```tsx
import { Button, Input } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'  // ⚠️ Don't forget this!

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Input placeholder="Enter text" />
    </div>
  )
}
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
import { Button } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

<Button variant="default" size="default">Click me</Button>
```

### Input

A flexible input component with validation states.

```tsx
import { Input } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

<Input type="text" placeholder="Enter text" />
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
