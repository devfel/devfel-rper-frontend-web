import styled from 'styled-components'

export const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
  margin-top: 20px;
`

export const Title = styled.h1`
  font-size: 3.6rem;
  color: #ff0042;
  margin-bottom: 20px;
`

export const Text = styled.p`
  color: #433889;
  font-size: 1.8rem;
  margin-bottom: 20px;
  line-height: 1.5;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`
// New styles for the references section
export const ReferencesWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 15px;
  background-color: #eaeaea;  // Slightly different background for distinction
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ReferencesTitle = styled.h2`
  font-size: 2.8rem;
  color: #ff0042;
  margin-bottom: 15px;
`

export const ReferencesText = styled.p`
  color: #433889;
  font-size: 1.6rem;
  margin-bottom: 15px;
  line-height: 1.4;
`