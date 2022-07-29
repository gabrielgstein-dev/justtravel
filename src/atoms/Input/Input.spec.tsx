import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { theme } from '@theme'
import { ThemeProvider } from 'styled-components'

import { Input } from './Input.atom'

describe('src/atoms/Input', () => {
  it('Should verify if the Input component is on the screen ', () => {
    const inputValue = 'Paragraph Test'

    render(
      <ThemeProvider theme={theme}>
        <Input value={inputValue} onChange={jest.fn} />
      </ThemeProvider>
    )

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  it('Should verify if the Input component change event is firing', () => {
    const inputValue = 'Paragraph Test'
    const valueChanged = 'Changed Value'
    const onChangeHandle = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Input value={inputValue} onChange={onChangeHandle} />
      </ThemeProvider>
    )

    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: {
        value: valueChanged,
      },
    })

    expect(onChangeHandle).toBeCalled()
  })

  it('Should verify if the Input component have style integrity', () => {
    const inputValue = 'Paragraph Test'
    const onChangeHandle = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Input value={inputValue} onChange={onChangeHandle} />
      </ThemeProvider>
    )

    const input = screen.getByRole('textbox')

    expect(input).toHaveStyle({
      'background-color': theme.pallete.greyScale.grey0,
      border: `0.8px solid ${theme.pallete.greyScale.grey10}`,
      'border-radius': '4px',
    })
  })
})
