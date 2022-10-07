import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  a {
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    height: 56px;
    justify-content: space-around;
  }

  span {
    font-size: 1.6rem;
    color: #7371ff;
    font-weight: 500;
  }

  strong {
    font-size: 1.6rem;
    color: #e62154;
    font-weight: 600;
  }

  img {
    border-radius: 50%;
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
