import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 3.2rem;
    color: #828282;
    margin-bottom: 24px;

    > svg {
      width: 52px;
      height: 52px;
      color: #ff0042;
    }
  }

  button {
    width: 176px;
    height: 48px;
    margin-left: 30px;
  }
`
