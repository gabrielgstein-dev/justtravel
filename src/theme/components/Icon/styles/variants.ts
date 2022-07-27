import { css } from 'styled-components'

export const primaryIcon = css`
  stroke: ${({ theme }) => theme.pallete.brand.white};
`

export const secondaryIcon = css`
  stroke: ${({ theme }) => theme.pallete.brand.blue};
`

export const disabledIcon = css`
  stroke: ${({ theme }) => theme.pallete.greyScale.grey30};
`
