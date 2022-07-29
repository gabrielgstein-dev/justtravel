import { InputProps } from '@atoms/Input/Input.interface'
import React from 'react'

export interface IconInputInternalProps extends InputProps {
  errorMessage: boolean
}

export interface IconInputProps extends InputProps {
  errorMessage?: string
  label?: string
  disabled?: boolean
  success?: boolean
  onChange: (value: string) => void
  icon: React.ReactNode
}

export interface IconInputContainerProps {
  disabled: boolean
  hasSuccess: boolean
  hasError: boolean
}
