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

    :disabled {
      opacity: 0.3;
      pointer-events: none;
    }
  }

  .help-icon {
    border-radius: 50%;
    vertical-align: middle;

    a {
      display: inline-block;

      &:hover svg {
        color: #01003a; // Slightly darker shade on hover
      }
      svg {
        color: #02004d; // Blue question mark
      }
    }
  }
`

export const ActionButtons = styled.div`
  display: flex;
`
