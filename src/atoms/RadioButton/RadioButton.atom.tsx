import { RadioProps } from './RadioButton.interface'

import * as S from './RadioButton.style'
export const RadioButton: React.FC<RadioProps> = ({
  name,
  onChange,
  checked,
  radioChildren = [],
}) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
    onChange(evt.target.value)
  }

  return (
    <S.RadioGroupContainer role={'radiogroup'}>
      {radioChildren.map(({ label, value, disabled }, index) => (
        <label key={`${label}-${index}`}>
          <S.RadioStyleContainer>
            <S.RadioInputContainer
              checked={checked === value}
              key={`${label}-${index}`}
              disabled={disabled}
            >
              <S.RadioInput
                type="radio"
                onChange={handleChange}
                name={name}
                value={value}
                checked={checked === value}
                aria-checked={checked === value}
                disabled={disabled}
              />
              <S.Fill />
            </S.RadioInputContainer>
            {label}
          </S.RadioStyleContainer>
        </label>
      ))}
    </S.RadioGroupContainer>
  )
}
