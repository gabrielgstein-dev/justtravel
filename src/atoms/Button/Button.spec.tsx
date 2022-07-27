import { render, screen, fireEvent } from '@testing-library/react'
import { theme } from '@theme'
import { ThemeProvider } from 'styled-components'

import { Button } from './Button.atom'

describe('src/atoms/Button', () => {
  it('Should verify if the button component is on the screen ', () => {
    const buttonLabel = 'Button Test'

    render(
      <ThemeProvider theme={theme}>
        <Button label={buttonLabel} onClick={jest.fn} />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button.innerHTML).toEqual(buttonLabel)
  })

  it('Should verify if the button component is firing on click event ', () => {
    const buttonLabel = 'Button Test'
    const clickEvent = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <Button label={buttonLabel} variant="primary" onClick={clickEvent} />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(clickEvent).toBeCalled()
  })
})
