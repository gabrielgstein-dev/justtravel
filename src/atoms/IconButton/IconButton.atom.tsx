import React from 'react'

import { IconButtonProps } from './IconButton.interface'

import * as S from './IconButton.style'

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  size = 'medium',
  variant = 'primary',
  icon,
  onClick,
}) => {
  return (
    <S.Button size={size} variant={variant} onClick={onClick}>
      {label}
      <S.IconContainer
        data-testid={'icon-button-icon-container'}
        variant={variant}
      >
        {icon}
      </S.IconContainer>
    </S.Button>
  )
}
