import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  width: 340px;
  height: 56px;
  padding: 0;
  border-radius: 10px;
  border: none;
  background-color: #e62154;
  color: #f0edee;
  font-size: 2rem;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${shade(0.2, '#e62154')};
  }
`
