import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;

    border-bottom: 0.8px solid ${theme.pallete.greyScale.grey10};
  `}
`

export const LogoContainer = styled.div``

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: 339px;
`

export const CurrencyContainer = styled.div`
  padding: 4px;
`
export const FAQContainer = styled.div`
  padding: 4px;
`
export const UserContainer = styled.div`
  ${({ theme }) => css`
    border-left: 1px solid ${theme.pallete.greyScale.grey10};
    padding: 4px;
  `}
`
