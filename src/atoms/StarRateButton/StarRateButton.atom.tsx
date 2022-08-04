import React from 'react'
import { YellowStarIcon } from '@assets/icons'
import { StarRateButtonProp } from './StarRateButton.interface'

import * as S from './StarRateButton.style'

export const StarRateButton: React.FC<StarRateButtonProp> = ({
  starsNumber,
  rateQty,
  status,
  onClick,
}) => {
  return (
    <S.Button status={status} onClick={onClick}>
      {Array.from(Array(starsNumber)).map((index) => (
        <YellowStarIcon key={index} />
      ))}
      {`(${rateQty})`}
    </S.Button>
  )
}
