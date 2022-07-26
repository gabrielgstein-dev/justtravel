import { Button } from './Button.atom'
import { ButtonProp } from './Button.interface'
import { Story, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

// import { ThemesProvider } from 'storybook-addon-styled-component-theme'

import { theme } from '@theme'

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

const ButtonStorie = {
  title: 'Button',
  component: Button,
}
const Template: Story<ButtonProp> = ({ label, size, variant }) => {
  return <Button label={label} size={size} variant={variant} />
}

export const Standard = Template.bind({})
Standard.args = {
  label: 'Standard',
  size: 'medium',
  variant: 'primary',
}

export default ButtonStorie
