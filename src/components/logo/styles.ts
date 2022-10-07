import styled from 'styled-components'

export const Container = styled.div`
  width: 23rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  width: 20rem;
  color: #7371ff;
  text-align: center;
`

export const Initials = styled.p`
  height: 8rem;
  font-size: 4.8rem;
  font-weight: 500;
  color: #ff0042;
  border-top: 0.2rem solid #e62154;
  border-bottom: 0.2rem solid #e62154;
  width: 100%;
  text-align: center;
  line-height: 8rem;

  &::before {
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: #7371ff;
    display: inline-block;
    vertical-align: middle;
    margin-right: 3.5rem;
  }

  &::after {
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: #7371ff;
    display: inline-block;
    vertical-align: middle;
    margin-left: 3.5rem;
  }
`

export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #7371ff;
  text-align: center;
`
