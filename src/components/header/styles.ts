import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface HeaderProp {
  btnType?: 'signOut' | 'back'
}

const btnTypeVariations = {
  signOut: css`
    button {
      font-size: 0;
      font-weight: 500;
      background-color: transparent;
      border: 0;
      color: #e62154;
      display: flex;
      align-items: flex-end;
      gap: 12px;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#e62154')};
      }

      &:hover > svg {
        color: ${shade(0.2, '#7371ff')};
      }
    }

    @media screen and (min-width: 1024px) {
      button {
        font-size: 1.6rem;
      }
    }
  `,
  back: css`
    a {
      font-size: 0;
      font-weight: 500;
      color: #e62154;
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, '#e62154')};
      }

      &:hover > svg {
        color: ${shade(0.2, '#7371ff')};
      }
    }

    @media screen and (min-width: 1024px) {
      a {
        font-size: 1.6rem;
      }
    }
  `,
}

export const HeaderContainer = styled.header`
  height: 144px;
  padding: 0 40px;
  background-color: #02004d;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    display: none;
  }

  @media screen and (min-width: 720px) {
    padding: 0 60px;
    img {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0 80px;

    img {
      display: block;
    }

    button {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 0 160px;
  }
`

export const HeaderContent = styled.div`
  display: flex;

  @media screen and (min-width: 720px) {
    gap: 50px;
  }

  @media screen and (min-width: 1024px) {
    gap: 85px;
  }
`

export const ButtonType = styled.div<HeaderProp>`
  ${props => btnTypeVariations[props.btnType || 'back']}

  svg {
    color: #7371ff;
    width: 20px;
    height: 20px;
  }
`
