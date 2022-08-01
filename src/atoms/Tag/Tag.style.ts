import styled, { css } from 'styled-components'

export const TagContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    padding: 4px 12px;
    background: ${theme.pallete.brand.white};
    box-shadow: 0px 4px 8px rgba(11, 31, 77, 0.1);
    border-radius: 15px;

    font-size: 12px;
  `}
`
