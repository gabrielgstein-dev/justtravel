import styled, { css } from 'styled-components'

import { TextInternalProps } from './Text.interface'

export const Paragraph = styled.p<TextInternalProps>`
  ${({ theme, size }) => css`
    ${theme.components.text.getTextSizeStyle(size)}
  `}
`
