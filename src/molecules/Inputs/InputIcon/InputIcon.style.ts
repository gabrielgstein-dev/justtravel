import styled, { css } from 'styled-components'
import { IconInputContainerProps } from './inputIcon.interface'

export const Container = styled.div``

export const InputContainer = styled.div<IconInputContainerProps>`
  ${({ theme, hasError, hasSuccess, disabled }) => css`
    position: relative;
    padding: 8px 0;
    display: flex;
    align-items: center;

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

export const IconContainer = styled.div`
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
