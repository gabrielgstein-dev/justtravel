import styled, { css } from 'styled-components'

import { RadioInternalProps } from './RadioButton.interface'

export const RadioGroupContainer = styled.div``

export const RadioStyleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RadioInputContainer = styled.div<RadioInternalProps>`
  margin: 5px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;

  border-radius: 100%;
  transition: all 100ms;

  ${({ theme, checked, disabled }) => css`
    ${disabled
      ? css`
          background-color: ${theme.pallete.greyScale.grey20};
        `
      : css`
          border: ${checked
            ? `1.8px solid ${theme.pallete.brand.blue}`
            : `1.8px solid ${theme.pallete.greyScale.grey20}`};

          &:hover {
            outline: 4px solid ${`${theme.pallete.brand.blue}26`};
            border: 1.8px solid ${theme.pallete.brand.blue};
          }
        `}
  `}
  label {
    margin-left: 25px;
  }
`

export const Fill = styled.div`
  background: ${({ theme }) => theme.pallete.brand.blue};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
`

export const RadioInput = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:focus {
    outline: none;
  }

  &:checked {
    & ~ ${Fill} {
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      transition: width 0.2s ease-out, height 0.2s ease-out;

      &::before {
        opacity: 1;
        transition: opacity 1s ease;
      }
    }
  }
`
