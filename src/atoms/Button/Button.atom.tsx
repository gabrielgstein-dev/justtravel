import React from 'react'

import { ButtonProp } from './Button.interface'

import * as S from './Button.style'

export const Button: React.FC<ButtonProp> = ({
  label,
  size = 'medium',
  variant = 'primary',
}) => {
  return (
    <S.Button size={size} variant={variant}>
      {label}
    </S.Button>
  )
}
