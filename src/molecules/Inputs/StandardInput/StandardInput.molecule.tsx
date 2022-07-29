import React, { useState } from 'react'

import { StandardInputProps } from './StandardInput.interface'
import { AlertCircle, SuccessIcon } from '@assets/icons'
import { Input } from '@atoms'
import * as S from './StandardInput.style'

export const StandardInput: React.FC<StandardInputProps> = ({
  value,
  onChange,
  placeholder,
  errorMessage,
  label,
  success,
  disabled,
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

        {showErrorMessage && (
          <S.ErrorIconContainer>
            <AlertCircle />
          </S.ErrorIconContainer>
        )}

        {showSuccessIcon && (
          <S.ErrorIconContainer>
            <SuccessIcon />
          </S.ErrorIconContainer>
        )}
      </S.InputContainer>

      {showErrorMessage && <S.ErrorContainer>{errorMessage}</S.ErrorContainer>}
    </S.Container>
  )
}
