# @alperenjs/ui-library Kullanım Örnekleri

## Kurulum

```bash
npm install @alperenjs/ui-library
```

## Temel Kullanım

### 1. CSS Import (Zorunlu!)

```tsx
import '@alperenjs/ui-library/style.css'
```

### 2. TanStack Form ile TextField Kullanımı

```tsx
import { useForm } from '@tanstack/react-form'
import { TextField } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Form submitted:', value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Email is required' : undefined,
          onChangeAsyncDebounceMs: 500,
          onChangeAsync: async ({ value }) => {
            if (!value.includes('@')) {
              return 'Please enter a valid email'
            }
            return undefined
          },
        }}
      >
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

      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) =>
            value.length < 8
              ? 'Password must be at least 8 characters'
              : undefined,
        }}
      >
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

### 3. Sadece FormError Kullanımı

```tsx
import { FormError } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

<form.Field name="email">
  {(field) => (
    <div>
      <input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {field.state.meta.isInvalid && (
        <FormError errors={field.state.meta.errors} />
      )}
    </div>
  )}
</form.Field>
```

### 4. Primitives (Button, Input) Kullanımı

```tsx
import { Button, Input } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

function MyComponent() {
  return (
    <div>
      <Input
        placeholder="Enter text"
        variant="outline"
        size="lg"
      />
      
      <Button variant="default" size="default">
        Click me
      </Button>
      
      <Button variant="outline" size="sm">
        Outline Button
      </Button>
    </div>
  )
}
```

### 5. TextField Variant ve Size Örnekleri

```tsx
import { TextField } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

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
      variant="outline"  // 'default' | 'outline'
      size="lg"          // 'sm' | 'default' | 'lg'
      description="Enter your email"
      descriptionIcon={<InfoIcon size={14} />}  // Custom icon
    />
  )}
</form.Field>
```

### 6. Custom Icon ile Description

```tsx
import { TextField } from '@alperenjs/ui-library'
import { AlertCircle, Info } from 'lucide-react'
import '@alperenjs/ui-library/style.css'

<TextField
  label="Email"
  name="email"
  description="This email will be used for login"
  descriptionIcon={<Info size={12} />}  // Custom icon
/>

<TextField
  label="Password"
  name="password"
  description="Keep it secure"
  descriptionIcon={<AlertCircle size={12} />}  // Different icon
/>
```

### 7. Error Handling Örnekleri

```tsx
// String error
<TextField
  label="Email"
  name="email"
  error="This email is already taken"
/>

// Object error
<TextField
  label="Email"
  name="email"
  error={{ message: 'Invalid email format' }}
/>

// TanStack Form errors array
<form.Field name="email">
  {(field) => (
    <TextField
      label="Email"
      name={field.name}
      errors={field.state.meta.errors}  // Array format
      value={field.state.value}
      onChange={(value) => field.handleChange(value)}
    />
  )}
</form.Field>
```

## Tam Örnek: Login Form

```tsx
import { useForm } from '@tanstack/react-form'
import { TextField, Button } from '@alperenjs/ui-library'
import '@alperenjs/ui-library/style.css'

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Login:', value)
      // API call here
    },
  })

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value ? 'Email is required' : undefined,
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              if (value && !value.includes('@')) {
                return 'Please enter a valid email'
              }
              return undefined
            },
          }}
        >
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
              variant="outline"
            />
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              value.length < 8
                ? 'Password must be at least 8 characters'
                : undefined,
          }}
        >
          {(field) => (
            <TextField
              label="Password"
              type="password"
              name={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(value) => field.handleChange(value)}
              onBlur={field.handleBlur}
              errors={field.state.meta.errors}
              description="Must be at least 8 characters"
              placeholder="Enter your password"
              variant="outline"
              className="mt-4"
            />
          )}
        </form.Field>

        <Button
          type="submit"
          variant="default"
          className="mt-6 w-full"
          disabled={!form.state.canSubmit}
        >
          Login
        </Button>
      </form>
    </div>
  )
}
```

## Component API

### TextField Props

```typescript
interface TextFieldProps {
  label?: string
  description?: string
  descriptionIcon?: React.ReactNode
  descriptionIconSize?: number
  error?: { message?: string } | string
  errors?: Array<{ message?: string } | undefined>  // TanStack Form
  onChange?: (value: string) => void
  onBlur?: () => void
  name: string
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline'
  // ... tüm HTML input props'ları
}
```

### FormError Props

```typescript
interface FormErrorProps {
  errors?: Array<{ message?: string } | undefined>
  className?: string
  // ... tüm HTML paragraph props'ları
}
```

## Notlar

- **CSS import zorunlu**: `import '@alperenjs/ui-library/style.css'`
- **Error varsa description gizlenir**: Otomatik olarak description error durumunda gizlenir
- **TanStack Form uyumlu**: `errors` prop'u ile direkt kullanılabilir
- **Icon desteği**: Lucide React icon'ları kullanılabilir
