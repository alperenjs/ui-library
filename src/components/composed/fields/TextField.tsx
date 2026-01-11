import * as React from 'react'

import { Input } from '@/components/primitives'
import { FormField, useFormField } from './FieldContext'
import { FieldWrapper } from './parts/FieldWrapper'
import { FieldLabel } from './parts/FieldLabel'
import { FieldError } from './parts/FieldError'
import { FieldDescription } from './parts/FieldDescription'
import { cn } from '@/lib/utils'

export interface TextFieldProps
    extends Omit<
        React.InputHTMLAttributes<HTMLInputElement>,
        'onChange' | 'onBlur' | 'size'
    > {
    label?: string
    description?: string
    descriptionIcon?: React.ReactNode
    descriptionIconSize?: number
    error?: { message?: string } | string
    errors?: Array<{ message?: string } | undefined>
    onChange?: (value: string) => void
    onBlur?: () => void
    name: string
    size?: 'default' | 'sm' | 'lg'
    variant?: 'default' | 'outline'
}

interface TextFieldInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    error?: { message?: string } | string
    onChange?: (value: string) => void
    size?: 'default' | 'sm' | 'lg'
    variant?: 'default' | 'outline'
}

const TextFieldInput = React.forwardRef<HTMLInputElement, TextFieldInputProps>(
    ({ className, error, onChange, ...props }, ref) => {
        const { error: contextError, formItemId } = useFormField()
        const hasError = !!error || !!contextError

        return (
            <Input
                ref={ref}
                id={formItemId}
                data-slot="text-field-input"
                aria-invalid={hasError}
                className={cn(hasError && 'aria-invalid:border-destructive', className)}
                onChange={(e) => onChange?.(e.target.value)}
                {...props}
            />
        )
    },
)
TextFieldInput.displayName = 'TextFieldInput'

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            label,
            description,
            descriptionIcon,
            descriptionIconSize,
            error,
            errors,
            name,
            onChange,
            onBlur,
            className,
            variant,
            size,
            ...props
        },
        ref,
    ) => {
        const hasError = !!error || (errors && errors.length > 0)

        return (
            <FormField name={name} error={error}>
                <FieldWrapper>
                    {label && <FieldLabel>{label}</FieldLabel>}
                    <TextFieldInput
                        ref={ref}
                        error={error}
                        onChange={onChange}
                        onBlur={onBlur}
                        variant={variant}
                        size={size}
                        className={className}
                        {...props}
                    />
                    {description && !hasError && (
                        <FieldDescription
                            icon={descriptionIcon}
                            iconSize={descriptionIconSize}
                        >
                            {description}
                        </FieldDescription>
                    )}
                    <FieldError errors={errors} />
                </FieldWrapper>
            </FormField>
        )
    },
)
TextField.displayName = 'TextField'

export { TextField }
