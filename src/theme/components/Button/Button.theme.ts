import { EnumSize, EnumVariant } from '@model/enum'
import { SizeType, VariantType } from '@model/types'

import { buttonLarge, buttonMedium, buttonSmall } from './styles/sizes'
import {
  primaryButton,
  secondaryButton,
  disableButton,
} from './styles/variants'

export const getButtonSizeStyle = (size?: SizeType) => {
  switch (size) {
    case EnumSize.LARGE:
      return buttonLarge
    case EnumSize.MEDIUM:
      return buttonMedium
    case EnumSize.SMALL:
      return buttonSmall
    default:
      return buttonMedium
  }
}

export const getButtonVariantStyle = (variant?: VariantType) => {
  switch (variant) {
    case EnumVariant.PRIMARY:
      return primaryButton
    case EnumVariant.SECONDARY:
      return secondaryButton
    case EnumVariant.DISABLED:
      return disableButton
    default:
      return primaryButton
  }
}
