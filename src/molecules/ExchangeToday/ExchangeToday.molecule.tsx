import React, { useState } from 'react'

import { BrazilFlagIcon } from '@assets/icons'
import { Text } from '@atoms'
import { moneyWithCurrencySymbol } from '@assets/normalizer'

import * as S from './ExchangeToday.style'

export const CurrencyToday: React.FC = () => {
  const [exchange] = useState(5.53)
  return (
    <S.Container>
      <Text.p4>
        Cotação do dólar hoje: {moneyWithCurrencySymbol(exchange)}
      </Text.p4>

      <BrazilFlagIcon />
    </S.Container>
  )
}
