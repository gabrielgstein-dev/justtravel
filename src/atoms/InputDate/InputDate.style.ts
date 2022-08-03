import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.pallete.brand.white};
    border: 0.8px solid ${theme.pallete.greyScale.grey20};
    padding: 24px 16px;
    height: 50px;
    min-width: 182px;
    outline: 0;
    padding-left: 50px;
    color: ${theme.pallete.greyScale.grey40};

    &:focus,
    &:active {
      border: 1px solid ${theme.pallete.brand.blue};
    }

    &::placeholder {
      color: ${theme.pallete.brand.black};
      opacity: 0.4;
    }

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      color: transparent;
      background: transparent;
    }
  `}
`

export const IconContainer = styled.div`
  position: absolute;
  left: 0;
  margin-left: 18px;
`

export const IconRightContainer = styled.div`
  position: absolute;
  right: 0;
  margin-left: 18px;
  margin-right: 8px;
`
