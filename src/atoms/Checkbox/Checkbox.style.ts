import styled from 'styled-components'

import { CheckboxInternalProps } from './Checkbox.interface'

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  margin-right: 6px;
`

export const StyledCheckbox = styled.div<CheckboxInternalProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18.2px;
  height: 18.2px;
  background: ${({ theme, checked, disabled }) => {
    if (disabled) {
      return checked ? theme.pallete.greyScale.grey20 : 'transparent'
    }

    return checked ? theme.pallete.brand.blue : 'transparent'
  }};

  border: 1.8px solid
    ${({ theme, checked }) =>
      checked ? theme.pallete.brand.blue : theme.pallete.greyScale.grey40};
  border-radius: 3px;
  transition: all 100ms;

  &:hover {
    border: 1.8px solid ${({ theme }) => theme.pallete.brand.blue};
    outline: 4px solid ${({ theme }) => `${theme.pallete.brand.blue}26`};
  }
`
