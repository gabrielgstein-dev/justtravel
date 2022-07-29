import React from 'react'

import { SwitchProps } from './Switch.interface'
import * as S from './Switch.style'

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  const handleChange = () => {
    onChange(!checked)
  }
  return (
    <S.SwitchContainer>
      <S.CheckBox
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <S.CheckBoxLabel htmlFor="checkbox" />
      {label}
    </S.SwitchContainer>
  )
}
