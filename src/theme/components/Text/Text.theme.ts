import { EnumSize } from '@model/enum'
import { SizeType } from '@model/types'

import { textLarge, textMedium, textNormal, textSmall } from './styles/sizes'
export const getTextSizeStyle = (size?: SizeType) => {
  switch (size) {
    case EnumSize.LARGE:
      return textLarge
    case EnumSize.MEDIUM:
      return textMedium
    case EnumSize.NORMAL:
      return textNormal
    case EnumSize.SMALL:
      return textSmall
    default:
      return textNormal
  }
}
