export interface RadioInternalProps {
  checked?: boolean
  disabled?: boolean
}
export interface RadioChildrenProps {
  label: string
  value: string
  disabled?: boolean
}

export interface RadioProps {
  name: string
  onChange: (value: string) => void
  radioChildren: RadioChildrenProps[]
  checked?: string
}
