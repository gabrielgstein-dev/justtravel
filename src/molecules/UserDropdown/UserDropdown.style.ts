import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.pallete.brand.blue};
    font-weight: 700;

    background-color: transparent;
    border: none;
    cursor: pointer;

    & > svg {
      margin-right: 8px;
    }
  `}
`
