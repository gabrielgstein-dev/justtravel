import styled, { css } from 'styled-components'
import {
  IconButtonInternalProps,
  IconInternalProps,
} from './IconButton.interface'

export const Button = styled.button<IconButtonInternalProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;

  ${({ theme, size, variant }) => css`
    ${theme.components.button.getButtonSizeStyle(size)}
    ${theme.components.button.getButtonVariantStyle(variant)}
  `}
`
export const IconContainer = styled.span<IconInternalProps>`
  display: flex;

  padding-left: 10px;

  ${({ theme, variant }) => css`
    & > svg {
      fill: none;
      ${theme.components.icon.getIconVariantStyle(variant)}
    }
  `}
`
