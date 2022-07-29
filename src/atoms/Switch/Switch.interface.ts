export interface SwitchInternalProps {
  label: string
  checked: boolean
}

export interface SwitchProps extends SwitchInternalProps {
  onChange: (value: boolean) => void
}
