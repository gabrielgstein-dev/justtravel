export interface SearchbarResponse {
  date: string
  search: string
}
export interface SearchInputInternalProps {
  disabled?: boolean
}

export interface SearchInputProps {
  disabled?: boolean
  onClick: (value: SearchbarResponse) => void
  onChange?: undefined
}
