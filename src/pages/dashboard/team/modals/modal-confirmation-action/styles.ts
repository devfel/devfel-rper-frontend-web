import styled from 'styled-components'

export const Modal = styled.dialog`
  margin: auto;
  border-radius: 20px;
  border: 0;
  width: 300px;
  height: 260px;
  overflow-y: hidden;
  position: relative;
  padding: 48px 16px;

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

  h3 {
    color: #433889;
    font-size: 2rem;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.6rem;
    color: #7371ff;
  }

  @media screen and (min-width: 720px) {
    width: 460px;
    height: 300px;
    padding: 48px 32px;

    > button {
      top: 24px;
      right: 32px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    h3 {
      color: #433889;
      font-size: 2.4rem;
      margin-bottom: 24px;
    }

    p {
      font-size: 1.8rem;
      color: #7371ff;
    }
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);

  > button {
    width: 110px;
    height: 48px;
    font-size: 1.8rem;
  }

  @media screen and (min-width: 720px) {
    > button {
      width: 180px;
    }
  }
`
