import styled, { css } from 'styled-components'
export const Container = styled.div``

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.pallete.greyScale.grey0};
    border: 0.8px solid ${theme.pallete.greyScale.grey10};
    border-radius: 4px;
    padding: 24px 16px;
    height: 50px;
    width: 100%;
    outline: 0;

    &:focus,
    &:active {
      border: 1px solid ${theme.pallete.brand.blue};
    }

    &::placeholder {
      color: ${theme.pallete.brand.black};
      opacity: 0.4;
    }
  `}
`

export const LabelContainer = styled.div``
export const ErrorMessageContaienr = styled.div``
