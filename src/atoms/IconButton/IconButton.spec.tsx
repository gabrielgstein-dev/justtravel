import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import { theme } from '@theme'
import { ThemeProvider } from 'styled-components'

import { IconButton } from './IconButton.atom'
import { ArrowRight } from '@assets/icons'

describe('src/atoms/Button', () => {
  it('Should verify if the button component is on the screen ', () => {
    const buttonLabel = 'Button Test'

    render(
      <ThemeProvider theme={theme}>
        <IconButton
          label={buttonLabel}
          onClick={jest.fn}
          icon={<ArrowRight />}
        />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button.textContent).toEqual(buttonLabel)
  })

  it('Should verify if the button component is firing on click event ', () => {
    const buttonLabel = 'Button Test'
    const clickEvent = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <IconButton
          label={buttonLabel}
          variant="primary"
          onClick={clickEvent}
          icon={<ArrowRight />}
        />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(clickEvent).toBeCalled()
  })

  it('Should verify if the button component have an icon inside of it', () => {
    const buttonLabel = 'Button Test'
    const clickEvent = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <IconButton
          label={buttonLabel}
          variant="primary"
          onClick={clickEvent}
          icon={<ArrowRight />}
        />
      </ThemeProvider>
    )

    const icon = screen.getByTestId('icon-button-icon-container')
    expect(icon).toBeInTheDocument()
    expect(icon.hasChildNodes()).toBeTruthy()
  })
})
