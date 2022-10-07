import styled from 'styled-components'
import { shade } from 'polished'
import SignUpBackgroundImg from '../../assets/sign-up-bg.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 700px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2 {
      font-size: 2.4rem;
      font-weight: 500;
      color: #ff0042;
      margin-bottom: 24px;
    }

    button {
      margin-top: 16px;
    }
  }

  > a {
    font-size: 1.6rem;
    text-decoration: none;
    color: #e62154;
    display: flex;
    align-items: center;
    margin-top: 24px;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.2, '#e62154')};
    }

    svg {
      margin-right: 16px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackgroundImg}) no-repeat top;
  background-size: cover;
`
