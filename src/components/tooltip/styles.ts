import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background-color: #7371ff;
    padding: 8px;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #7371ff transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
