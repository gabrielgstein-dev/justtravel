import { EnumSupport, EnumInputStyle } from '@model/enum'
import { SupportType, InputSharedStyle } from '@model/types'

import {
  errorSupport,
  successSupport,
  disabledSupport,
} from './styles/support.style'

export const getSharedInputStyle = (style?: InputSharedStyle) => {
  switch (style) {
    case EnumInputStyle.ICON_PADDING_RIGHT:
      return errorSupport
    case EnumInputStyle.INPUT_WITH_ICON_DEFAULT_STYLE:
      return successSupport
    default:
      return ''
  }
}

export const getInputSupportStyle = (variant?: SupportType) => {
  switch (variant) {
    case EnumSupport.ERROR:
      return errorSupport
    case EnumSupport.SUCCESS:
      return successSupport
    case EnumSupport.DISABLED:
      return disabledSupport
    default:
      return successSupport
  }
}
