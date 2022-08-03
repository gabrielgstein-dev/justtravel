import React from 'react'

import { MessageQuestionIcon } from '@assets/icons'
import { CurrencyToday, UserDropdown } from '@molecules'
import StandardLogo from '@assets/images/StandardLogo'

import * as S from './Header.style'

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <StandardLogo height={20} width={100} />
      </S.LogoContainer>

      <S.RightContainer>
        <S.CurrencyContainer>
          <CurrencyToday />
        </S.CurrencyContainer>

        <S.FAQContainer>
          <MessageQuestionIcon />
        </S.FAQContainer>

        <S.UserContainer>
          <UserDropdown />
        </S.UserContainer>
      </S.RightContainer>
    </S.Container>
  )
}
