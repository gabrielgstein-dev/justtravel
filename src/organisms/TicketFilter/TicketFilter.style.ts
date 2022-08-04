import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.pallete.brand.white};
  `}
`

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.pallete.greyScale.grey10};
  `}
`

export const PriceContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.pallete.greyScale.grey10};
  `}
`

export const PropertyRate = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.pallete.greyScale.grey10};
  `}
`

export const ConvenienceContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.pallete.greyScale.grey10};
  `}
`

export const PropertyTypeContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.pallete.greyScale.grey10};
  `}
`

export const ReviewScoreContainer = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.pallete.greyScale.grey10};
  `}
`
