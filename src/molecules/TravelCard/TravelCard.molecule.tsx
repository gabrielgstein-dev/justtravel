import React from 'react'
import Image from 'next/image'

import { Tag, Title, Text } from '@atoms'

import { EmptyHeartIcon, PinIcon } from '@assets/icons'
import { TravelCardProps } from './TravelCard.interface'
import * as S from './TravelCard.style'
import { theme } from '@theme'
import {
  moneyWithCurrencySymbol,
  moneyWithoutCurrencySymbol,
} from '@assets/normalizer'

export const TravelCard: React.FC<TravelCardProps> = ({
  location,
  originalPrice,
  promoPrice,
  rank,
  reviewsQty,
  title,
  img,
}) => {
  return (
    <S.Container>
      <S.PhotoContainer>
        <S.HeaderPhoto>
          <S.TagContainer>
            <Tag label="Ingresso" />
          </S.TagContainer>

          <S.FavoriteContainer>
            <EmptyHeartIcon />
          </S.FavoriteContainer>
        </S.HeaderPhoto>

        <Image layout="fill" src={img || ''} alt={'City Image'} />
      </S.PhotoContainer>

      <S.DescriptionContainer>
        <S.TitleContainer>
          <Title.h3>{title}</Title.h3>
          <S.LocationContainer>
            <PinIcon color={theme.pallete.brand.blue} />
            <Text.p3>{location}</Text.p3>
          </S.LocationContainer>

          <S.RankContainer>
            <S.Rank>{rank}</S.Rank>
            <S.RankTitle>
              <Text.p3>Excellent</Text.p3>
            </S.RankTitle>
            <S.RankReview>{`(${reviewsQty} Reviews)`}</S.RankReview>
          </S.RankContainer>
        </S.TitleContainer>

        <S.PriceContainer>
          <S.OriginalPrice>
            <Text.p3>{`de ${moneyWithCurrencySymbol(
              originalPrice
            )} por`}</Text.p3>
          </S.OriginalPrice>

          <S.PromoPriceContainer>
            <S.CurrencySimbol>
              <Text.p3>R$</Text.p3>
            </S.CurrencySimbol>
            <S.PromoPriceValue>
              <Title.h2>{moneyWithoutCurrencySymbol(promoPrice)}</Title.h2>
            </S.PromoPriceValue>
          </S.PromoPriceContainer>
        </S.PriceContainer>
      </S.DescriptionContainer>
    </S.Container>
  )
}
