import styled, { css } from 'styled-components'

import { SearchInputInternalProps } from './SearchInput.interface'

export const Container = styled.div``

export const InputContainer = styled.div<SearchInputInternalProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;

    & > input {
      ${disabled && theme.components.input.getInputSupportStyle('disabled')}
      padding-left: 52px;
      background-color: ${theme.pallete.brand.white};
      color: ${theme.pallete.greyScale.grey40};
      border-radius: 0;
      border: 0.8px solid ${theme.pallete.greyScale.grey20};
    }
  `}
`

export const IconContainer = styled.div`
  ${() => css`
    display: flex;
    left: 0;
    position: absolute;
    margin-left: 17px;
  `}
`

export const SearchButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    min-width: 50px;

    border: 0.8px solid ${theme.pallete.greyScale.grey20};
    background-color: ${theme.pallete.brand.white};

    cursor: pointer;
  `}
`
