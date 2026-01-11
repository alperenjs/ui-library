import * as React from 'react'

import { cn } from '@/lib/utils'
import { useFormField } from '../FieldContext'

export interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
    errors?: Array<{ message?: string } | undefined>
}

const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
    ({ className, errors, children, ...props }, ref) => {
        const { error: contextError, formMessageId } = useFormField()

        // Priority: errors prop > contextError > children
        let body: React.ReactNode = null

        if (errors && errors.length > 0) {
            // TanStack Form errors array formatı
            const firstError = errors.find((e) => e?.message)
            body = firstError?.message || ''
        } else if (contextError) {
            // Context'ten gelen error
            body =
                typeof contextError === 'string'
                    ? contextError
                    : contextError?.message ?? ''
        } else if (children) {
            // Children prop
            body = children
        }

        if (!body) {
            return null
        }

        return (
            <p
                ref={ref}
                data-slot="form-message"
                id={formMessageId}
                className={cn('text-destructive text-sm', className)}
                {...props}
            >
                {body}
            </p>
        )
    },
)
FieldError.displayName = 'FieldError'

export { FieldError }
