import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 233px;
    box-shadow: ${theme.shadow.s};
    padding: 0px 24px 0px 0px;
  `}
`

export const HeaderPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px;
  z-index: 2;
`

export const PhotoContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 213px;
    background-color: ${theme.pallete.greyScale.grey15};
    position: relative;
    z-index: 1;
  `}
`

export const TagContainer = styled.div`
  z-index: 10;
`

export const FavoriteContainer = styled.div`
  z-index: 10;
`

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 33px 24px;
  width: 100%;
`

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    width: 60%;
    border-right: 1px solid ${theme.pallete.greyScale.grey10};
  `}
`

export const RankContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
`
export const Rank = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 38px;
    color: ${theme.pallete.brand.white};
    background-color: ${theme.pallete.brand.blue};
    border-radius: 2px;
    margin-right: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const RankTitle = styled.div`
  margin-right: 11px;
`
export const RankReview = styled.div`
  ${({ theme }) => css`
    color: ${theme.pallete.greyScale.grey40};
  `}
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 8px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 24px;
  width: 40%;
`

export const OriginalPrice = styled.div`
  ${({ theme }) => css`
    color: ${theme.pallete.greyScale.grey50};
  `}
`
export const PromoPriceContainer = styled.div`
  display: flex;
`
export const PromoPriceValue = styled.div`
  ${({ theme }) => css`
    color: ${theme.pallete.brand.blue};
  `}
`
export const CurrencySimbol = styled.div`
  margin-right: 4px;
`

export const ReadMoreContainer = styled.div`
  margin-top: 24px;
`
