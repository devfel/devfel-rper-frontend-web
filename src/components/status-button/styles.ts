import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  color: #7371ff;

  > svg {
    width: 14px;
    height: 14px;
    color: inherit;
    transform: translateY(15%);
  }

  &:hover ul {
    visibility: visible;
    height: 144px;
  }
`

export const StatusList = styled.ul`
  font-size: 1.4rem;
  z-index: 1;
  transition: 0.6s;
  overflow-y: hidden;
  background-color: #f0edee;
  border-radius: 10px;
  width: 160px;
  position: absolute;
  left: 16px;
  top: -10px;

  visibility: hidden;
  height: 0px;

  &:hover {
    visibility: visible;
    height: 144px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    list-style: none;
    padding: 8px 16px;
    color: #433889;
    border-bottom: 1px solid #ffffff;

    &:hover {
      background-color: ${shade(0.2, '#f2f4f8')};
    }

    svg {
      width: 14px;
      height: 14px;
      color: #7371ff;
    }
  }
`
