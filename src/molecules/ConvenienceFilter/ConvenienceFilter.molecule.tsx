import React from 'react'
import { Checkbox } from '@atoms'
import { ConvenienceFilterProps } from './ConvenienceFilter.interface'

import * as S from './ConvenienceFilter.style'

export const ConvenienceFilter: React.FC<ConvenienceFilterProps> = ({
  convenienceList,
  onChecked,
}) => {
  return (
    <S.Container>
      {convenienceList.map(({ label, checked }, index) => (
        <Checkbox
          key={`${label}-${checked}-${index}`}
          label={label}
          checked={checked}
          onChange={() => onChecked({ label, checked })}
        />
      ))}
    </S.Container>
  )
}
