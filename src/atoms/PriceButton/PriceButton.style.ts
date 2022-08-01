import styled, { css } from 'styled-components'
import { theme } from '@theme'
import { PriceButtonInternalProp, StatusType } from './PriceButton.interface'

export const getStatusIconColor = (status?: StatusType) => {
  switch (status) {
    case 'able':
      return theme.pallete.brand.blue
    case 'selected':
      return theme.pallete.brand.white
    case 'disable':
      return theme.pallete.greyScale.grey20

    default:
      return theme.pallete.greyScale.grey20
  }
}
const getStatusStyle = (status?: StatusType) => {
  switch (status) {
    case 'able':
      return statusAble
    case 'selected':
      return statusSelected
    case 'disable':
      return statusDisabled

    default:
      return statusDisabled
  }
}

export const Button = styled.button<PriceButtonInternalProp>`
  ${({ theme, size, status }) => css`
    ${theme.components.button.getButtonSizeStyle(size)}
    ${getStatusStyle(status)}
  `}

  font-size: 14px;
  font-weight: normal;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 2px;
  height: 34px;

  & > svg {
    margin: 10px;
  }
`

const statusSelected = css`
  color: ${({ theme }) => theme.pallete.greyScale.grey10};
  background-color: ${({ theme }) => theme.pallete.brand.blue};
  border: none;

  & > svg {
    color: ${({ theme }) => theme.pallete.greyScale.grey20};
  }
`

const statusAble = css`
  color: ${({ theme }) => theme.pallete.brand.blue};
  background-color: ${({ theme }) => theme.pallete.brand.white};
  border: 1px solid ${({ theme }) => theme.pallete.brand.blue};
`
const statusDisabled = css`
  color: ${({ theme }) => theme.pallete.greyScale.grey20};
  background-color: ${({ theme }) => theme.pallete.brand.white};
  border: 1px solid ${({ theme }) => theme.pallete.greyScale.grey20};
`
