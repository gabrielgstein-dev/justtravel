export const moneyWithCurrencySymbol = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const moneyWithoutCurrencySymbol = (value: number) => {
  return value.toLocaleString('pt-BR')
}
