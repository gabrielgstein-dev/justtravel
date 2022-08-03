import React from 'react'
import { SearchbarResponse } from '@molecules/Inputs/SearchPinInput/SearchInput.interface'

import { ListIcon, SideToSideIcon } from '@assets/icons'
import { SearchPinInput } from '@molecules'

import * as S from './HeaderSearchAddon.style'

export const HeaderSearchAddon: React.FC = () => {
  const handleClickSearch = (searchBarValue: SearchbarResponse) => {
    console.log(searchBarValue)
  }
  return (
    <S.Container>
      <S.LeftItemsContainer>
        <S.SearchTextInputContainer>
          <SearchPinInput onClick={handleClickSearch} />
        </S.SearchTextInputContainer>
      </S.LeftItemsContainer>

      <S.RightItemsContainer>
        <S.SiteToSideIconContainer>
          <SideToSideIcon />
        </S.SiteToSideIconContainer>

        <S.ListIconContainer>
          <ListIcon />
        </S.ListIconContainer>
      </S.RightItemsContainer>
    </S.Container>
  )
}
