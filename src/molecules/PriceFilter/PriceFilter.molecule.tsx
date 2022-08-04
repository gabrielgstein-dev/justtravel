import React from 'react'
import { PriceButton } from '@atoms'
import {
  PriceFilterProps,
  PriceRange,
  PriceRangeChoosed,
} from './PriceFilter.interface'

import * as S from './PriceFilter.style'
import { StatusType } from '@atoms/PriceButton/PriceButton.interface'

export const PriceFilter: React.FC<PriceFilterProps> = ({
  priceRange,
  onChoosePriceRange,
}) => {
  const getStatus = (value: PriceRange): StatusType => {
    const [minPrice, maxPrice, status] = value
    const [minPriceSelected, maxPriceSelected] = priceRange.selected

    if (minPrice === minPriceSelected && maxPrice === maxPriceSelected) {
      return 'selected'
    }

    return status || 'disable'
  }
  const handleClick = (value: PriceRangeChoosed) => {
    onChoosePriceRange(value)
  }

  return (
    <S.Container>
      {priceRange.prices.map((props, index) => {
        const [minPrice, maxPrice] = props
        return (
          <PriceButton
            status={getStatus(props)}
            key={`${minPrice}-${maxPrice}-${index}`}
            lowestPrice={minPrice}
            highestPrice={maxPrice}
            onClick={() =>
              handleClick({
                minPrice,
                maxPrice,
              })
            }
          />
        )
      })}
    </S.Container>
  )
}
