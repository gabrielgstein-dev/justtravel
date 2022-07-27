import { pallete } from './palette'
import { fontFamily } from './fontFamily'
import { spacing } from './spacing'
import { shadow } from './shadow'

import { ButtonTheme, IconTheme } from './components'

export * from './global'

export const theme = {
  pallete,
  fontFamily,
  spacing,
  shadow,
  components: {
    button: ButtonTheme,
    icon: IconTheme,
  },
}
