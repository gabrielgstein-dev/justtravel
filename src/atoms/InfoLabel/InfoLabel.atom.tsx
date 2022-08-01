import { theme } from '@theme'
import React from 'react'
import { InfoLabelProps } from './InfoLabel.interface'
import * as S from './InfoLabel.style'

export const InfoLabel: React.FC<InfoLabelProps> = ({ label, Icon }) => {
  return (
    <S.Container>
      <Icon color={theme.pallete.greyScale.grey40} />
      {label}
    </S.Container>
  )
}
