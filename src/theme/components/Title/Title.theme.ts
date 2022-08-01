import { EnumTitleSize } from '@model/enum'
import { TitleSizeType } from '@model/types'

import * as S from './styles/sizes'
export const getTitleSizeStyle = (size?: TitleSizeType) => {
  switch (size) {
    case EnumTitleSize.H1:
      return S.H1
    case EnumTitleSize.H2:
      return S.H2
    case EnumTitleSize.H3:
      return S.H3
    default:
      return S.H1
  }
}
