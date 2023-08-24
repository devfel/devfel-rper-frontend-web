import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    margin-top: 24px;

    p {
      font-size: 2rem;
      color: #433889;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 3.2rem;
    color: #828282;
    grid-area: title;

    > svg {
      width: 52px;
      height: 52px;
      color: #ff0042;
    }
  }

  h3 {
    font-size: 1.8rem;
    color: #7371ff;
    padding-bottom: 16px;
    border-bottom: 2px solid #f0edee;
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
  }

  & div {
    width: 100%;
  }

  button {
    width: 176px;
    height: 48px;
    margin-right: 30px;

    :disabled {
      opacity: 0.3;
      pointer-events: none;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-areas:
      'title title'
      'team info'
      'progress progress'
      'carousel carousel';
    grid-template-columns: 1fr 296px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-areas:
      'title title title'
      'team team info'
      'progress progress progress'
      'carousel carousel carousel';

    grid-template-columns: 1fr 1fr 296px;
  }
`

export const ActionButtons = styled.div`
  display: flex;
`
