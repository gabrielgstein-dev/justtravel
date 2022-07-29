import { CheckboxProps } from './Checkbox.interface'
import { CheckIcon, MinusIcon } from '@assets/icons'

import { theme } from '@theme'

import * as S from './Checkbox.style'
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  interminateChecked,
  ...props
}) => {
  const handleChange = () => {
    onChange(!checked)
  }

  return (
    <label>
      <S.CheckboxContainer>
        <S.HiddenCheckbox
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <S.StyledCheckbox
          checked={checked}
          interminateChecked={interminateChecked}
        >
          {checked && !interminateChecked && <CheckIcon />}
          {checked && interminateChecked && (
            <MinusIcon color={theme.pallete.brand.white} />
          )}
          {!checked && interminateChecked && (
            <MinusIcon color={theme.pallete.greyScale.grey40} />
          )}
        </S.StyledCheckbox>
      </S.CheckboxContainer>

      {label}
    </label>
  )
}
