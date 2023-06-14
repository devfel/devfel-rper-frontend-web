import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
  grid-area: info;

  p {
    font-size: 1.4rem;
    color: #ff0042;
    line-height: 24px;
    margin-top: 20px;

    & + p {
      margin-top: 0px;
      margin-bottom: 20px;
    }
  }

  > img {
    width: 250px;
    height: 380px;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 250px;
  height: 380px;
  background-color: #f0edee;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`
export const PlaceholderLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 70px;
    height: 70px;
    color: #c0c1c5;
  }
`
