import { SizeType, VariantType } from '@model/types'

export interface ButtonInternalProp {
  variant?: VariantType
  size?: SizeType
}

export interface ButtonProp extends ButtonInternalProp {
  label: string
}
