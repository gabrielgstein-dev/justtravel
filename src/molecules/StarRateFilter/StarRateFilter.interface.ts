export interface StarRateConfig {
  starRate: number
  rateQty: number
}

export interface StarRateFilterProps {
  starRates: StarRateConfig[]
  choosedRate?: StarRateConfig
  onChoosePriceRate: (value: StarRateConfig) => void
}
