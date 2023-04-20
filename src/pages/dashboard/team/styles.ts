import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 3.2rem;
    color: #828282;

    > svg {
      width: 52px;
      height: 52px;
      color: #ff0042;
    }
  }
`

export const TeamContainer = styled.div`
  padding: 16px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
`

export const MemberCard = styled.article`
  display: flex;
  align-items: center;
  gap: 32px;
  border-bottom: 1px solid #f0edee;
  padding: 20px;
`

export const AvatarContainer = styled.div`
  width: 56px;
  height: 56px;
`

export const MemberInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;

  strong,
  span {
    font-size: 2rem;
    color: #ff0042;
  }

  span {
    display: flex;
    justify-content: center;

    > svg {
      width: 32px;
      height: 32px;
      color: #ffd700;
    }

    @media screen and (min-width: 768px) {
      width: 136px;
    }
  }
`

export const CoordinatorButtonsManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const PromoteToCoordinatorButton = styled.button`
  background-color: #7371ff;

  &:hover {
    background-color: ${shade(0.2, '#7371ff')};
  }

  > svg {
    color: #f0edee;
    width: 16px;
    height: 16px;
  }
`

export const RemoveMemberButton = styled.button`
  background-color: #e62154;

  &:hover {
    background-color: ${shade(0.2, '#e62154')};
  }

  > svg {
    color: #f0edee;
    width: 24px;
    height: 24px;
  }
`

export const TeamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #f0edee;
  margin-left: -24px;
  margin-right: -24px;
  padding: 0 24px;
  padding-bottom: 16px;

  h3 {
    font-size: 1.8rem;
    color: #7371ff;
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    background-color: #e62154;
    color: #f0edee;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover {
      background-color: ${shade(0.2, '#e62154')};
    }

    svg {
      width: 24px;
      height: 24px;
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

  > div {
    width: 22px;
    height: 22px;
    background-color: #c0c1c5;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  > div:last-child {
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
