import React from 'react'

import { PriceButtonProp } from './PriceButton.interface'
import { moneyWithCurrencySymbol } from '@assets/normalizer'

import * as S from './PriceButton.style'

export const PriceButton: React.FC<PriceButtonProp> = ({
  highestPrice,
  lowestPrice,
  size = 'small',
  status,
  Icon,
  onClick,
}) => {
  return (
    <S.Button size={size} status={status} onClick={onClick}>
      {!!Icon && <Icon color={S.getStatusIconColor(status)} />}
      {`${moneyWithCurrencySymbol(lowestPrice)} - ${moneyWithCurrencySymbol(
        highestPrice
      )}`}
    </S.Button>
  )
}
