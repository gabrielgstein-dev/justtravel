import { StatusType } from '@atoms/PriceButton/PriceButton.interface'

export type PriceRange = [number, number, StatusType]

export interface PriceRangeChoosed {
  minPrice: number
  maxPrice: number
}

export interface PriceFilterProps {
  priceRange: {
    prices: PriceRange[]
    selected: PriceRange
  }
  onChoosePriceRange: (value: PriceRangeChoosed) => void
}
