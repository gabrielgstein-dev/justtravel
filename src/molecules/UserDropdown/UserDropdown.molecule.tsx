import React from 'react'

import { Text } from '@atoms'

import { UserProfileIcon } from '@assets/icons'

import * as S from './UserDropdown.style'

export const UserDropdown: React.FC = () => {
  return (
    <S.Container>
      <UserProfileIcon />
      <Text.p2>Entrar</Text.p2>
    </S.Container>
  )
}

export default UserDropdown
