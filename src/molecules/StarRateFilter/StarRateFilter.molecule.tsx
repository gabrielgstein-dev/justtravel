import React from 'react'
import { StarRateButton } from '@atoms'
import { StarRateConfig, StarRateFilterProps } from './StarRateFilter.interface'

import * as S from './StarFilter.style'
import { StatusType } from '@atoms/PriceButton/PriceButton.interface'

export const StarRateFilter: React.FC<StarRateFilterProps> = ({
  starRates,
  choosedRate,
  onChoosePriceRate,
}) => {
  const getStatus = (value: StarRateConfig): StatusType => {
    const { starRate } = value

    if (starRate === choosedRate?.starRate) {
      return 'selected'
    }

    return 'disable'
  }

  const handleClick = (value: StarRateConfig) => {
    onChoosePriceRate(value)
  }

  return (
    <S.Container>
      {starRates.map((props, index) => {
        const { rateQty, starRate } = props
        return (
          <StarRateButton
            key={`${starRate}-${rateQty}-${index}`}
            status={getStatus(props)}
            rateQty={rateQty}
            starsNumber={starRate}
            onClick={() => handleClick(props)}
          />
        )
      })}
    </S.Container>
  )
}
