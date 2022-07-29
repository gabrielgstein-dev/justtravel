import { InputProps } from '@atoms/Input/Input.interface'

export interface StandardInputInternalProps extends InputProps {
  errorMessage: boolean
}
export interface StandardInputProps extends InputProps {
  errorMessage?: string
  label?: string
  success?: boolean
  disabled?: boolean
}

export interface StandardInputContainerProps {
  hasError: boolean
  hasSuccess: boolean
  disabled: boolean
}
