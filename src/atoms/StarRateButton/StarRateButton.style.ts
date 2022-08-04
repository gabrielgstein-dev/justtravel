import styled, { css } from 'styled-components'
import {
  StarRateButtonInternalProp,
  StatusType,
} from './StarRateButton.interface'

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

export const Button = styled.button<StarRateButtonInternalProp>`
  ${({ theme, size, status }) => css`
    ${theme.components.button.getButtonSizeStyle(size)}
    ${getStatusStyle(status)}
    color: ${theme.pallete.greyScale.grey30};
  `}

  font-size: 14px;
  font-weight: normal;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  height: 34px;

  & > svg {
    margin: 2px;

    &:last-child {
      margin-right: 12px;
    }
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
