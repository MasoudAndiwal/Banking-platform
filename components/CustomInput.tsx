import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'

const authFormSchema = (type: string) => {
  return z.object({
    firstName: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    lastName: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    address1: type === 'sign-up' ? z.string().max(50) : z.string().optional(),
    city: type === 'sign-up' ? z.string().max(50) : z.string().optional(),
    state: type === 'sign-up' ? z.string().min(2).max(2) : z.string().optional(),
    postalCode: type === 'sign-up' ? z.string().min(3).max(6) : z.string().optional(),
    dateOfBirth: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    ssn: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  })
}

interface CustomInputProps {
  control: Control<z.infer<ReturnType<typeof authFormSchema>>>
  name: FieldPath<z.infer<ReturnType<typeof authFormSchema>>>
  label: string
  placeholder: string
  type?: string
}

const CustomInput = ({ control, name, label, placeholder, type = 'text' }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput