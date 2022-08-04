import { SizeType, VariantType } from '@model/types'

export type StatusType = 'able' | 'selected' | 'disable'

export interface StarRateButtonInternalProp {
  variant?: VariantType
  size?: SizeType
  status?: StatusType
}

export interface StarRateButtonProp extends StarRateButtonInternalProp {
  starsNumber: number
  rateQty: number
  onClick: () => void
}
