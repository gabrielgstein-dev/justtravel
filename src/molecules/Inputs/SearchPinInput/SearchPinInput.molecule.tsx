import React, { useState } from 'react'

import { SearchbarResponse, SearchInputProps } from './SearchInput.interface'

import { Input, InputDate } from '@atoms'
import * as S from './SearchPinInput.style'
import { PinIcon, SearchIcon } from '@assets/icons'
import { theme } from '@theme'

export const SearchPinInput: React.FC<SearchInputProps> = ({
  onClick,
  disabled = false,
}) => {
  const [inputTextValue, setInputTextValue] = useState('')
  const [inputDateValue, setInputDateValue] = useState('')

  const handleChange = (value: string) => {
    setInputTextValue(value)
  }
  const handleChangeDate = (value: string) => {
    setInputDateValue(value)
  }

  const handleClickSearch = () => {
    const response: SearchbarResponse = {
      date: inputDateValue,
      search: inputTextValue,
    }
    onClick(response)
  }

  return (
    <S.Container>
      <S.InputContainer disabled={disabled}>
        <S.IconContainer>
          <PinIcon color={theme.pallete.brand.blue} />
        </S.IconContainer>

        <Input
          placeholder="GetYourGuide Tours & Tickets GmbH"
          value={inputTextValue}
          onChange={handleChange}
          disabled={disabled}
        />

        <InputDate onChange={handleChangeDate} value={inputDateValue} />

        <S.SearchButton onClick={handleClickSearch}>
          <SearchIcon color={theme.pallete.greyScale.grey20} />
        </S.SearchButton>
      </S.InputContainer>
    </S.Container>
  )
}
