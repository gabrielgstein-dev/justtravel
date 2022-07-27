import '@testing-library/jest-dom'
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

  it('Should verify if the button component is in the right variant color "primary" ', () => {
    const buttonLabel = 'Button Test'
    const clickEvent = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <Button label={buttonLabel} variant="primary" onClick={clickEvent} />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      'background-color': theme.pallete.brand.blue,
      color: theme.pallete.brand.white,
      border: 'none',
    })
  })

  it('Should verify if the button component is in the right variant color "secondary" ', () => {
    const buttonLabel = 'Button Test'
    const clickEvent = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <Button label={buttonLabel} variant="secondary" onClick={clickEvent} />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      'background-color': theme.pallete.brand.white,
      color: theme.pallete.brand.blue,
      border: `1px solid ${theme.pallete.brand.blue}`,
    })
  })
  it('Should verify if the button component is in the right variant color "disabled" ', () => {
    const buttonLabel = 'Button Test'
    const clickEvent = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <Button label={buttonLabel} variant="disabled" onClick={clickEvent} />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      'background-color': theme.pallete.greyScale.grey10,
      color: theme.pallete.greyScale.grey30,
      border: 'none',
    })
  })
})
