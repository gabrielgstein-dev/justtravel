import React, { useState } from 'react'

import { IconInputProps } from './inputIcon.interface'

import { Input } from '@atoms'
import * as S from './InputIcon.style'

export const IconInput: React.FC<IconInputProps> = ({
  value,
  onChange,
  placeholder,
  errorMessage,
  label,
  success,
  disabled,
  icon,
}) => {
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(
    !!errorMessage
  )

  const [showSuccessIcon, setShowSuccessIcon] = useState<boolean>(!!success)

  const handleChange = (value: string) => {
    setShowErrorMessage(false)
    setShowSuccessIcon(false)
    onChange(value)
  }

  return (
    <S.Container>
      {!!label && <S.LabelContainer>{label}</S.LabelContainer>}

      <S.InputContainer
        hasError={showErrorMessage}
        hasSuccess={showSuccessIcon}
        disabled={!!disabled}
      >
        <Input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />

        <S.IconContainer>{icon}</S.IconContainer>
      </S.InputContainer>

      {showErrorMessage && <S.ErrorContainer>{errorMessage}</S.ErrorContainer>}
    </S.Container>
  )
}
