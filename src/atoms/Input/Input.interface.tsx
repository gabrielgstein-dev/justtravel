export interface InputInternalProps {
  errorMessage: boolean
}

export interface InputProps {
  onChange: (value: string) => void
  value: string
  errorMessage?: string
}
