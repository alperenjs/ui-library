import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './src/components/primitives/Button'
import { Input } from './src/components/primitives/Input'
import { TextField } from './src/components/composed/fields/TextField'
import './src/styles.css'

function Demo() {
  const [inputValue, setInputValue] = React.useState('')
  const [emailValue, setEmailValue] = React.useState('')
  const [passwordValue, setPasswordValue] = React.useState('')
  const [emailError, setEmailError] = React.useState<string | undefined>()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-foreground">
          UI Library Demo
        </h1>

        {/* Button Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            Button Component
          </h2>
          <div className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="mb-3 text-lg font-medium">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="destructiveOutline">Destructive Outline</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">States</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Input Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            Input Component
          </h2>
          <div className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="mb-3 text-lg font-medium">Variants</h3>
              <div className="space-y-3">
                <Input
                  placeholder="Default variant"
                  variant="default"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  placeholder="Outline variant"
                  variant="outline"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Sizes</h3>
              <div className="space-y-3">
                <Input placeholder="Small size" size="sm" />
                <Input placeholder="Default size" size="default" />
                <Input placeholder="Large size" size="lg" />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Types</h3>
              <div className="space-y-3">
                <Input type="text" placeholder="Text input" />
                <Input type="email" placeholder="Email input" />
                <Input type="password" placeholder="Password input" />
                <Input type="number" placeholder="Number input" />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">States</h3>
              <div className="space-y-3">
                <Input placeholder="Normal input" />
                <Input placeholder="Disabled input" disabled />
                <Input
                  placeholder="Input with value"
                  value="Sample text"
                  readOnly
                />
              </div>
            </div>
          </div>
        </section>

        {/* TextField Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            TextField Component (Form Field)
          </h2>
          <div className="space-y-6 rounded-lg border border-border bg-card p-6">
            <div>
              <h3 className="mb-3 text-lg font-medium">Basic Usage</h3>
              <div className="space-y-4">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={emailValue}
                  onChange={(value) => setEmailValue(value)}
                  onBlur={() => {
                    if (emailValue && !emailValue.includes('@')) {
                      setEmailError('Please enter a valid email')
                    } else {
                      setEmailError(undefined)
                    }
                  }}
                  error={emailError}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={passwordValue}
                  onChange={(value) => setPasswordValue(value)}
                  description="Must be at least 8 characters"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">With Error State</h3>
              <div className="space-y-4">
                <TextField
                  label="Email"
                  type="email"
                  name="email-error"
                  placeholder="Enter your email"
                  error="This email is already taken"
                />
                <TextField
                  label="Username"
                  type="text"
                  name="username-error"
                  placeholder="Enter username"
                  error={{ message: 'Username must be at least 3 characters' }}
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">With Description</h3>
              <div className="space-y-4">
                <TextField
                  label="Full Name"
                  type="text"
                  name="fullname"
                  placeholder="John Doe"
                  description="Enter your first and last name"
                  error={{ message: 'This field is required' }}
                />
                <TextField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  description="Include country code"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Different Types</h3>
              <div className="space-y-4">
                <TextField
                  label="Email"
                  type="email"
                  name="email-type"
                  placeholder="email@example.com"
                />
                <TextField
                  label="Password"
                  type="password"
                  name="password-type"
                  placeholder="Enter password"
                />
                <TextField
                  label="Number"
                  type="number"
                  name="number-type"
                  placeholder="Enter a number"
                />
                <TextField
                  label="Date"
                  type="date"
                  name="date-type"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Variants</h3>
              <div className="space-y-4">
                <TextField
                  label="Alperen variant"
                  type="text"
                  name="default-variant"
                  variant="outline"
                  placeholder="Default variant input"
                  error="This email is already taken"
                />
                <TextField
                  label="Outline Variant"
                  type="text"
                  name="outline-variant"
                  variant="outline"
                  placeholder="Outline variant input"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-medium">Sizes</h3>
              <div className="space-y-4">
                <TextField
                  label="Small"
                  type="text"
                  name="small"
                  size="sm"
                  placeholder="Small input"
                />
                <TextField
                  label="Default"
                  type="text"
                  name="default"
                  size="default"
                  placeholder="Default input"
                />
                <TextField
                  label="Large"
                  type="text"
                  name="large"
                  size="lg"
                  placeholder="Large input"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Combined Example */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">
            Combined Example
          </h2>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="space-y-4">
              <Input
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="flex gap-3">
                <Button
                  onClick={() => alert(`Hello, ${inputValue || 'Guest'}!`)}
                >
                  Submit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setInputValue('')}
                >
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
)
