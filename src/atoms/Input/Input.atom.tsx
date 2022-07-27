import React from 'react'

import { InputProps } from './Input.interface'
import * as S from './Input.style'

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  errorMessage,
}) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value)
  }
  return (
    <S.Input
      placeholder="Empty Input"
      value={value}
      onChange={handleChange}
      errorMessage={!!errorMessage}
    />
  )
}
