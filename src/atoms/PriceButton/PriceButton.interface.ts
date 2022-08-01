import { SizeType, VariantType } from '@model/types'
import { FunctionComponent, SVGProps } from 'react'

export type StatusType = 'able' | 'selected' | 'disable'

export interface PriceButtonInternalProp {
  variant?: VariantType
  size?: SizeType
  status?: StatusType
}

export interface PriceButtonProp extends PriceButtonInternalProp {
  lowestPrice: number
  highestPrice: number
  onClick: () => void
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>
}
