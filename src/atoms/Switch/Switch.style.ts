import styled, { css } from 'styled-components'

export const SwitchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 20px;
  border-radius: 15px;
  background: ${({ theme }) => theme.pallete.greyScale.grey50};

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 2px;
    background: #ffffff;
    transition: 0.2s;
  }
`

export const CheckBox = styled.input`
  margin-right: 19px;
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 38px;
  height: 20px;
  cursor: pointer;

  &:checked + ${CheckBoxLabel} {
    ${({ theme }) => css`
      background: ${theme.pallete.brand.blue};
      &::after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin-left: 20px;
        transition: 0.2s;
      }
    `}
  }
`
