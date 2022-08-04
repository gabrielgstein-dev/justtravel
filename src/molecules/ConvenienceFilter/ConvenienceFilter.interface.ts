export interface ConveninenceItem {
  label: string
  checked: boolean
}

export interface ConvenienceFilterProps {
  convenienceList: ConveninenceItem[]
  onChecked: (value: ConveninenceItem) => void
}
