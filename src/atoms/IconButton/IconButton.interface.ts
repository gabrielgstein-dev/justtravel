import { SizeType, VariantType } from '@model/types'
import React from 'react'

export interface IconButtonInternalProps {
  variant?: VariantType
  size?: SizeType
}

export interface IconInternalProps {
  variant?: VariantType
}

export interface IconButtonProps extends IconButtonInternalProps {
  label?: string
  icon: React.ReactNode
  onClick: () => void
  children?: React.ReactNode
}
