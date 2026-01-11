import * as React from 'react'
import { Info } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useFormField } from '../FieldContext'

export interface FieldDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    icon?: React.ReactNode
    iconSize?: number
}

const FieldDescription = React.forwardRef<
    HTMLParagraphElement,
    FieldDescriptionProps
>(({ className, icon, iconSize = 12, children, ...props }, ref) => {
    const { formDescriptionId } = useFormField()
    const IconComponent = icon || <Info size={iconSize} />

    return (
        <p
            ref={ref}
            data-slot="form-description"
            id={formDescriptionId}
            className={cn(
                'text-muted-foreground text-sm flex items-center gap-1.5',
                className,
            )}
            {...props}
        >
            <span className="shrink-0">{IconComponent}</span>
            {children && <span>{children}</span>}
        </p>
    )
})
FieldDescription.displayName = 'FieldDescription'

export { FieldDescription }
