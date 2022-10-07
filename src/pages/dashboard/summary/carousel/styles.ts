import styled from 'styled-components'
import { shade } from 'polished'

export const CarouselContainer = styled.div`
  height: 520px;
  padding: 16px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  grid-area: carousel;

  @media screen and (min-width: 1024px) {
    height: 600px;
  }
`

export const CarouselControls = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    margin: 16px 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: all 0.3s;

    svg {
      width: 20px;
      height: 20px;
      color: #ff0042;
      &:hover {
        color: ${shade(0.2, '#e62154')};
      }
    }
  }
`

export const CarouselSlides = styled.div`
  img {
    margin: 0 auto;
    width: 248px;
    height: 352px;
    border-radius: 10px;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 314px;
      height: 422px;
    }
  }
`

export const CarouselIndicators = styled.ul`
  li {
    > button::before {
      content: '';
      margin-top: 16px;
      width: 10px;
      height: 10px;
      background-color: #7371ff;
      border-radius: 50%;
    }
  }
`
