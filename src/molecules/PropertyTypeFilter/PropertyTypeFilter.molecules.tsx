import React from 'react'
import { PropertyType } from '@model/types'
import { HouseIcon } from '@assets/icons'
import { IconButton } from '@atoms'

import { PropertyTypeFilterProps } from './PropertyTypeFilter.interface'
import * as S from './PropertytypeFilter.style'

export const PropertyTypeFilter: React.FC<PropertyTypeFilterProps> = ({
  onChangeProperty,
}) => {
  const handleClick = (value: PropertyType) => {
    onChangeProperty(value)
  }
  return (
    <S.Container>
      <IconButton onClick={() => handleClick('house')} icon={<HouseIcon />} />
      <IconButton
        onClick={() => handleClick('apartment')}
        icon={<HouseIcon />}
      />
      <IconButton onClick={() => handleClick('hotel')} icon={<HouseIcon />} />
    </S.Container>
  )
}
