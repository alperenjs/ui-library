import * as React from 'react'

import { Label } from '@/components/primitives'
import { cn } from '@/lib/utils'
import { useFormField } from '../FieldContext'

const FieldLabel = React.forwardRef<
    React.ElementRef<typeof Label>,
    React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
        <Label
            ref={ref}
            data-slot="form-label"
            data-error={!!error}
            className={cn('data-[error=true]:text-destructive', className)}
            htmlFor={formItemId}
            {...props}
        />
    )
})
FieldLabel.displayName = 'FieldLabel'

export { FieldLabel }
