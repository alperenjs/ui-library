import * as React from 'react'

import { cn } from '@/lib/utils'

const FieldWrapper = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-slot="form-item"
            className={cn('space-y-2', className)}
            {...props}
        />
    )
})
FieldWrapper.displayName = 'FieldWrapper'

export { FieldWrapper }
