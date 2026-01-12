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
- 📝 TanStack Form integration ready

## Why shadcn/ui?

This library is built on **shadcn/ui** principles, which means:

- **Copy-paste philosophy**: Components are yours to own and customize
- **Radix UI primitives**: Built on accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first styling with full customization
- **TypeScript**: Full type safety out of the box
- **No runtime dependencies**: Components are compiled into your bundle

We use shadcn/ui's proven patterns:
- `class-variance-authority` (cva) for variant management
- `clsx` + `tailwind-merge` for conditional class merging
- Radix UI primitives for accessibility
- React Context API for form state management

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

## Form Fields

This library provides two ways to create form fields:

### 1. TextField Component (Recommended for most cases)

**TextField** is a composed component that combines all field parts into one easy-to-use component. Perfect for standard form fields.

#### Advantages:
- ✅ **Quick setup**: One component, fully configured
- ✅ **Consistent**: Automatic spacing and layout
- ✅ **Less code**: Fewer imports and boilerplate
- ✅ **Error handling**: Built-in error state management
- ✅ **Accessibility**: Automatic ARIA attributes

#### Example with TanStack Form and Zod:

```tsx
import { useForm } from '@tanstack/react-form'
import { TextField } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'
import * as z from 'zod'

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters'),
})

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Form submitted:', value)
    },
    validators: {
      onChange: formSchema,
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.Field name="email">
        {(field) => (
          <TextField
            label="Email"
            type="email"
            name={field.name}
            value={field.state.value}
            onChange={(value) => field.handleChange(value)}
            onBlur={field.handleBlur}
            errors={field.state.meta.errors}
            description="Enter your email address"
            placeholder="email@example.com"
          />
        )}
      </form.Field>

      <form.Field name="password">
        {(field) => (
          <TextField
            label="Password"
            type="password"
            name={field.name}
            value={field.state.value}
            onChange={(value) => field.handleChange(value)}
            onBlur={field.handleBlur}
            errors={field.state.meta.errors}
            description="Must be at least 8 characters"
            placeholder="Enter your password"
          />
        )}
      </form.Field>

      <button type="submit">Submit</button>
    </form>
  )
}
```

### 2. Manual Field Parts (For custom layouts)

For maximum flexibility, you can compose fields manually using individual parts. This gives you full control over the layout and behavior.

#### Advantages:
- ✅ **Full control**: Customize every aspect of the field
- ✅ **Flexible layout**: Arrange components however you need
- ✅ **Custom components**: Use any input component, not just Input
- ✅ **Advanced styling**: Apply custom classes to individual parts
- ✅ **Conditional rendering**: Full control over when to show/hide parts

#### Example with TanStack Form and Zod:

```tsx
import { useForm } from '@tanstack/react-form'
import {
  FormField,
  FieldWrapper,
  FieldLabel,
  FieldDescription,
  FieldError,
  Input,
} from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'
import * as z from 'zod'

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters'),
})

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Form submitted:', value)
    },
    validators: {
      onChange: formSchema,
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.Field name="email">
        {(field) => {
          const hasError = field.state.meta.errors.length > 0
          
          return (
            <FormField name={field.name} error={field.state.meta.errors[0]}>
              <FieldWrapper>
                <FieldLabel>Email</FieldLabel>
                <Input
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="email@example.com"
                  aria-invalid={hasError}
                />
                {!hasError && (
                  <FieldDescription>
                    Enter your email address
                  </FieldDescription>
                )}
                <FieldError errors={field.state.meta.errors} />
              </FieldWrapper>
            </FormField>
          )
        }}
      </form.Field>

      <form.Field name="password">
        {(field) => {
          const hasError = field.state.meta.errors.length > 0
          
          return (
            <FormField name={field.name} error={field.state.meta.errors[0]}>
              <FieldWrapper className="custom-spacing">
                <FieldLabel>Password</FieldLabel>
                <Input
                  type="password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Enter your password"
                  aria-invalid={hasError}
                />
                {!hasError && (
                  <FieldDescription icon={<CustomIcon />}>
                    Must be at least 8 characters
                  </FieldDescription>
                )}
                <FieldError errors={field.state.meta.errors} />
              </FieldWrapper>
            </FormField>
          )
        }}
      </form.Field>

      <button type="submit">Submit</button>
    </form>
  )
}
```

### When to Use Which?

| Use Case | Recommendation |
|----------|---------------|
| Standard form fields | **TextField** - Faster, less code |
| Custom layouts | **Manual parts** - Full control |
| Different input types | **Manual parts** - Use any component |
| Advanced styling needs | **Manual parts** - Per-component styling |
| Quick prototyping | **TextField** - Get started fast |

## Components

### Primitives

#### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

<Button variant="default" size="default">Click me</Button>
<Button variant="outline" size="sm">Small</Button>
<Button variant="destructive" size="lg">Delete</Button>
```

#### Input

A flexible input component with validation states.

```tsx
import { Input } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

<Input type="text" placeholder="Enter text" />
<Input variant="outline" size="sm" />
```

#### Label

Accessible label component built on Radix UI.

```tsx
import { Label } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

<Label htmlFor="input-id">Email</Label>
```

### Form Components

#### TextField

Composed text input field with label, description, and error handling.

```tsx
import { TextField } from '@alperenjs/ui-library'

<TextField
  label="Email"
  name="email"
  value={value}
  onChange={(value) => setValue(value)}
  errors={errors}
  description="Enter your email"
/>
```

#### FormField

Context provider for form field state management.

```tsx
import { FormField } from '@alperenjs/ui-library'

<FormField name="email" error={error}>
  {/* Field parts */}
</FormField>
```

#### FieldWrapper

Container component for form field spacing.

```tsx
import { FieldWrapper } from '@alperenjs/ui-library'

<FieldWrapper>
  {/* Label, Input, Description, Error */}
</FieldWrapper>
```

#### FieldLabel

Label component that automatically connects to form field.

```tsx
import { FieldLabel } from '@alperenjs/ui-library'

<FieldLabel>Email</FieldLabel>
```

#### FieldDescription

Description text with optional icon.

```tsx
import { FieldDescription } from '@alperenjs/ui-library'

<FieldDescription icon={<InfoIcon />}>
  Enter your email address
</FieldDescription>
```

#### FieldError

Error message display component.

```tsx
import { FieldError } from '@alperenjs/ui-library'

<FieldError errors={errors} />
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

## Project Structure

```
ui-library/
├── src/
│   ├── components/
│   │   ├── primitives/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Label.tsx
│   │   │   └── index.ts
│   │   ├── composed/
│   │   │   └── fields/
│   │   │       ├── TextField.tsx
│   │   │       ├── FieldContext.tsx
│   │   │       └── parts/
│   │   │           ├── FieldWrapper.tsx
│   │   │           ├── FieldLabel.tsx
│   │   │           ├── FieldDescription.tsx
│   │   │           └── FieldError.tsx
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   └── index.ts
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## License

MIT
