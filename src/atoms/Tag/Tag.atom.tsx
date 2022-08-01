import React from 'react'

import { TagProps } from './Tag.interface'
import * as S from './Tag.style'

export const Tag: React.FC<TagProps> = ({ label }) => {
  return <S.TagContainer>{label}</S.TagContainer>
}
