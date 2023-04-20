import styled from 'styled-components'

export const Modal = styled.dialog`
  margin: auto;
  border-radius: 20px;
  border: 0;
  width: 300px;
  height: 500px;
  overflow-y: hidden;
  position: relative;
  padding: 48px 16px 16px 16px;

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
  }

  @media screen and (min-width: 1024px) {
    width: 900px;
    height: 600px;
  }
`

export const TeamContainer = styled.div`
  height: 340px;
  padding: 16px 24px;
  background-color: #ffffff;
  overflow-y: scroll;

  label {
    display: flex;
    align-items: center;
    gap: 32px;
    border-bottom: 1px solid #f0edee;
    padding: 20px;
    cursor: pointer;

    > div {
      width: 56px;
      height: 56px;
    }

    strong {
      font-size: 2rem;
      color: #ff0042;
    }
  }

  @media screen and (min-width: 720px) {
    height: 220px;
  }

  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);

  > button {
    width: 220px;
  }

  @media screen and (min-width: 720px) {
    > button {
      width: 220px;
    }
  }

  @media screen and (min-width: 1024px) {
    > button {
      width: 280px;
    }
  }
`

export const PlaceholderLoading = styled.div`
  min-width: 56px;
  min-height: 56px;
  background-color: #dddee0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-self: center;
  align-items: center;
  position: relative;

  &::before {
    animation: is-passing 0.8s ease-in infinite;
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    background: linear-gradient(
      to right,
      transparent,
      #ffffff 50%,
      transparent
    );
  }

  div {
    width: 22px;
    height: 22px;
    background-color: #c0c1c5;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div:last-child {
    width: 50px;
    height: 50px;
    background-color: #c0c1c5;
    border-radius: 50%;
    position: absolute;
    top: 110%;
  }

  @keyframes is-passing {
    from {
      transform: translateX(-100%);
    }
  }
`
