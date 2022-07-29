import styled, { css } from 'styled-components'
import { StandardInputContainerProps } from './StandardInput.interface'

export const Container = styled.div``

export const InputContainer = styled.div<StandardInputContainerProps>`
  ${({ theme, hasError, hasSuccess, disabled }) => css`
    ${theme.components.input.getSharedInputStyle('inputWithIconDefaultStyle')}

    & > input {
      ${hasError && theme.components.input.getInputSupportStyle('error')}
      ${hasSuccess && theme.components.input.getInputSupportStyle('success')}
      ${disabled && theme.components.input.getInputSupportStyle('disabled')}
    }
  `}
`

export const LabelContainer = styled.div`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.pallete.brand.black};
    opacity: 0.6;
  `}
`

export const ErrorIconContainer = styled.div`
  ${() => css`
    display: flex;
    right: 0;
    position: absolute;
    margin-right: 17px;
  `}
`

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.pallete.semantic.error};
  `}
`
