import React from 'react'

import { Text } from '@atoms'
import { PriceFilter, StarRateFilter, ConvenienceFilter } from '@molecules'
import {
  PriceRange,
  PriceRangeChoosed,
} from '@molecules/PriceFilter/PriceFilter.interface'

import * as S from './TicketFilter.style'
import { StarRateConfig } from '@molecules/StarRateFilter/StarRateFilter.interface'
import { ConveninenceItem } from '@molecules/ConvenienceFilter/ConvenienceFilter.interface'

export const TicketFilter: React.FC = () => {
  const priceRange = {
    prices: [
      [10, 390, 'able'],
      [391, 690, 'able'],
      [791, 990, 'disable'],
      [991, 3000, 'disable'],
    ] as PriceRange[],
    selected: [391, 690, 'able'] as PriceRange,
  }

  const starRateConfig = [
    {
      starRate: 5,
      rateQty: 321,
    },
    {
      starRate: 4,
      rateQty: 12,
    },
    {
      starRate: 3,
      rateQty: 52,
    },
    {
      starRate: 2,
      rateQty: 10,
    },
    {
      starRate: 1,
      rateQty: 5,
    },
  ]
  const convenienceConfig = [
    {
      label: 'Wi-Fi',
      checked: false,
    },
    {
      label: 'Cozinha',
      checked: false,
    },
    {
      label: 'Máquina de Lavar',
      checked: true,
    },
    {
      label: 'Ar-Condicionado',
      checked: false,
    },
    {
      label: 'Secadora',
      checked: false,
    },
  ]

  const onChooseRangePrice = (price: PriceRangeChoosed) => {
    console.log(price)
  }
  const onChoosePriceRange = (rate: StarRateConfig) => {
    console.log(rate)
  }
  const onCheckSomeConvenience = (rate: ConveninenceItem) => {
    console.log(rate)
  }

  return (
    <S.Container>
      <S.PriceContainer>
        <Text.p2>Preço</Text.p2>
        <PriceFilter
          priceRange={priceRange}
          onChoosePriceRange={onChooseRangePrice}
        />
      </S.PriceContainer>

      <S.PropertyRate>
        <Text.p2>Tipo de propriedade</Text.p2>
        <StarRateFilter
          starRates={starRateConfig}
          onChoosePriceRate={onChoosePriceRange}
        />
      </S.PropertyRate>
      <S.ConvenienceContainer>
        <Text.p2>Comodidade</Text.p2>
        <ConvenienceFilter
          onChecked={onCheckSomeConvenience}
          convenienceList={convenienceConfig}
        />
      </S.ConvenienceContainer>
      <S.PropertyTypeContainer>PropertyTypeContainer</S.PropertyTypeContainer>
      <S.ReviewScoreContainer>ReviewScoreContainer</S.ReviewScoreContainer>
    </S.Container>
  )
}
