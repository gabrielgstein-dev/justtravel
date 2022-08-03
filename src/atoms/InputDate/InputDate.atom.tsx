import React from 'react'

import { InputProps } from './InputDate.interface'
import { CalendarSearchIcon, ArrowDown } from '@assets/icons'
import * as S from './InputDate.style'

export const InputDate: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value)
  }
  return (
    <S.Container>
      <S.IconContainer>
        <CalendarSearchIcon />
      </S.IconContainer>
      <S.Input
        disabled={disabled}
        value={value}
        onChange={handleChange}
        type="date"
      />

      <S.IconRightContainer>
        <ArrowDown />
      </S.IconRightContainer>
    </S.Container>
  )
}
