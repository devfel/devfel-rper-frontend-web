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
`

export const ImgContainerButton = styled.div`
  width: 250px;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;

  img {
    cursor: pointer;
  }

  input {
    display: none;
  }
`

export const ImgInputButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 56px;
  border-radius: 10px;
  background-color: #e62154;
  color: #f0edee;
  font-size: 2rem;
  font-weight: 500;
  transition: background-color 0.3s;
  cursor: pointer;
  position: absolute;
  top: 60%;

  &:hover {
    background-color: ${shade(0.2, '#e62154')};
  }

  input {
    display: none;
  }
`

export const DefaultImage = styled.img`
  width: 80%;
  height: 80%;
  position: absolute;
  bottom: 30%;
`
