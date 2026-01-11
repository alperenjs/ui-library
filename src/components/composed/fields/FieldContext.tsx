import * as React from 'react'
import { useId } from 'react'

interface FormFieldContextValue {
    name: string
    id: string
    formItemId: string
    formDescriptionId: string
    formMessageId: string
    error?: { message?: string } | string
}

const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(
    undefined,
)

export function useFormField() {
    const fieldContext = React.useContext(FormFieldContext)

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>')
    }

    return fieldContext
}

interface FormFieldProps {
    name: string
    error?: { message?: string } | string
    children: React.ReactNode
}

export function FormField({ name, error, children }: FormFieldProps) {
    const id = useId()
    const formItemId = `${id}-form-item`
    const formDescriptionId = `${id}-form-description`
    const formMessageId = `${id}-form-message`

    const contextValue = React.useMemo<FormFieldContextValue>(
        () => ({
            name,
            id,
            formItemId,
            formDescriptionId,
            formMessageId,
            error,
        }),
        [name, id, formItemId, formDescriptionId, formMessageId, error],
    )

    return (
        <FormFieldContext.Provider value={contextValue}>
            {children}
        </FormFieldContext.Provider>
    )
}
