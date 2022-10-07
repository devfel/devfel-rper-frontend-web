import styled, { css } from 'styled-components'
import Tooltip from '../tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 340px;
  height: 56px;
  padding: 16px;
  border-radius: 10px;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  color: #433889;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030 !important;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #7371ff;
      border-color: #7371ff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #7371ff;
    `}

  input {
    flex: 1;
    background: transparent;
    border: none;
    /* margin: 16px; */
    font-size: 1.8rem;
    color: #433889;

    &::placeholder {
      color: #433889;
    }

    &:focus {
      outline: none;
    }
  }

  > svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  span {
    background-color: #c53030;
    color: #ffffff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
