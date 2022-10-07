import styled from 'styled-components'
import { shade } from 'polished'

export const Modal = styled.dialog`
  margin: auto;
  border-radius: 20px;
  border: 0;
  width: 300px;
  position: relative;

  &::backdrop {
    background-color: #00000080;
  }

  > button {
    width: 24px;
    height: 24px;
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 12px;
    right: 24px;
    border-radius: 50%;
    transition: all 0.3s;

    &:hover {
      background-color: #dfdfdf;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 2.4rem;
      color: #7371ff;
    }

    > div {
      border-color: #c0c0c3;
      width: 100%;
      margin: 16px 0 24px;

      &:focus-within {
        border: 2px solid #7371ff;
      }

      input {
        width: 100%;
      }

      span {
        background-color: #c53030;
        color: #ffffff;
        width: 90px;
        font-size: 1rem;
      }
    }

    p {
      margin: 16px 0;
      font-size: 1.4rem;
    }

    span {
      font-weight: 700;
      color: #7371ff;
    }

    strong {
      color: #ff0042;
    }

    button {
      margin: 0 auto;
      width: 50%;
      border: 0;
      background-color: #e62154;
      color: #f0edee;
      border-radius: 12px;
      font-size: 1.6rem;
      padding: 8px;
      font-weight: 500;
      transition: all 0.3s;

      &:hover {
        background-color: ${shade(0.2, '#e62154')};
      }
    }
  }

  @media screen and (min-width: 720px) {
    font-size: 2.6rem;
    width: 600px;
    height: 400px;

    > button {
      top: 24px;
      right: 32px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    form {
      padding: 30px 40px;
      margin-top: 40px;

      > div {
        margin-bottom: 56px;

        span {
          width: 120px;
          font-size: 1.4rem;
        }
      }

      p {
        margin-bottom: 40px;
        font-size: 1.6rem;
      }
    }
  }
`
