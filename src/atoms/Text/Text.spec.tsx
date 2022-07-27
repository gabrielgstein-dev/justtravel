import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { theme } from '@theme'
import { ThemeProvider } from 'styled-components'

import { Text } from './Text.atom'

describe('src/atoms/Text', () => {
  it('Should verify if the Text component is on the screen ', () => {
    const testText = 'Paragraph Test'

    render(
      <ThemeProvider theme={theme}>
        <Text.p1>{testText}</Text.p1>
      </ThemeProvider>
    )

    const text = screen.getByText(testText)
    expect(text).toBeInTheDocument()
  })

  it('Should verify if the Text component is on the right size "p1" ', () => {
    const testText = 'Paragraph Test'

    render(
      <ThemeProvider theme={theme}>
        <Text.p1>{testText}</Text.p1>
      </ThemeProvider>
    )

    const text = screen.getByText(testText)

    expect(text).toHaveStyle({
      'font-size': theme.typography.paragraphs.large,
    })
  })

  it('Should verify if the Text component is on the right size "p2" ', () => {
    const testText = 'Paragraph Test'

    render(
      <ThemeProvider theme={theme}>
        <Text.p2>{testText}</Text.p2>
      </ThemeProvider>
    )

    const text = screen.getByText(testText)

    expect(text).toHaveStyle({
      'font-size': theme.typography.paragraphs.medium,
    })
  })

  it('Should verify if the Text component is on the right size "p3" ', () => {
    const testText = 'Paragraph Test'

    render(
      <ThemeProvider theme={theme}>
        <Text.p3>{testText}</Text.p3>
      </ThemeProvider>
    )

    const text = screen.getByText(testText)

    expect(text).toHaveStyle({
      'font-size': theme.typography.paragraphs.normal,
    })
  })

  it('Should verify if the Text component is on the right size "p4" ', () => {
    const testText = 'Paragraph Test'

    render(
      <ThemeProvider theme={theme}>
        <Text.p4>{testText}</Text.p4>
      </ThemeProvider>
    )

    const text = screen.getByText(testText)

    expect(text).toHaveStyle({
      'font-size': theme.typography.paragraphs.small,
    })
  })
})
