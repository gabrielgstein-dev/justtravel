import { css } from 'styled-components'

export const primaryButton = css`
  background-color: ${({ theme }) => theme.pallete.brand.blue};
  color: ${({ theme }) => theme.pallete.brand.white};
  border-radius: 4px;
  stroke: none;
  border: none;
`

export const secondaryButton = css`
  background-color: ${({ theme }) => theme.pallete.brand.white};
  color: ${({ theme }) => theme.pallete.brand.blue};
  stroke: 1px ${({ theme }) => theme.pallete.brand.blue};
  border: 1px solid ${({ theme }) => theme.pallete.brand.blue};
  border-radius: 4px;
`

export const disableButton = css`
  background-color: ${({ theme }) => theme.pallete.greyScale.grey10};
  color: ${({ theme }) => theme.pallete.greyScale.grey30};
  stroke: 1px ${({ theme }) => theme.pallete.brand.blue};
  border-radius: 4px;
  border: none;
  cursor: not-allowed;
`
