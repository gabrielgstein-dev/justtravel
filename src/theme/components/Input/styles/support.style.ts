import { css } from 'styled-components'
import { inputIconPaddingRight } from './shared.style'

export const errorSupport = css`
  border-color: ${({ theme }) => theme.pallete.semantic.error};
  ${inputIconPaddingRight}
`

export const successSupport = css`
  border-color: ${({ theme }) => theme.pallete.semantic.success};
  ${inputIconPaddingRight}
`

export const disabledSupport = css`
  background-color: ${({ theme }) => theme.pallete.greyScale.grey10};
  color: ${({ theme }) => theme.pallete.greyScale.grey30};
  border: 0.8px solid ${({ theme }) => theme.pallete.greyScale.grey10};
`
