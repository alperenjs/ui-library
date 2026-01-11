import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './src/components/ui/button'
import { Input } from './src/components/ui/input'
import './src/styles.css'

function Demo() {
  const [inputValue, setInputValue] = React.useState('')

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
