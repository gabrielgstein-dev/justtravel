import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.pallete.greyScale.grey40};
    font-size: 12px;

    & > svg {
      margin: 0 10px;
    }
  `}
`
