import { EnumVariant } from '@model/enum'
import { VariantType } from '@model/types'

import { primaryIcon, secondaryIcon, disabledIcon } from './styles/variants'

export const getIconVariantStyle = (variant?: VariantType) => {
  switch (variant) {
    case EnumVariant.PRIMARY:
      return primaryIcon
    case EnumVariant.SECONDARY:
      return secondaryIcon
    case EnumVariant.DISABLED:
      return disabledIcon
    default:
      return primaryIcon
  }
}
