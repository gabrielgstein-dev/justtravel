import { pallete } from './palette'
import { fontFamily } from './fontFamily'
import { spacing } from './spacing'
import { shadow } from './shadow'
import { typography } from './typography'

import { ButtonTheme, IconTheme, TextTheme } from './components'

export * from './global'

export const theme = {
  pallete,
  fontFamily,
  spacing,
  shadow,
  typography,
  components: {
    button: ButtonTheme,
    icon: IconTheme,
    text: TextTheme,
  },
}
