import styled, { css } from 'styled-components'
import { ButtonInternalProp } from './Button.interface'

export const Button = styled.button<ButtonInternalProp>`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;

  ${({ theme, size, variant }) => css`
    ${theme.components.button.getButtonSizeStyle(size)}
    ${theme.components.button.getButtonVariantStyle(variant)}
  `}
`
