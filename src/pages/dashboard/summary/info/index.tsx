import {
  Container,
  DefaultImage,
  ImageContainer,
  ImgInputButton,
  ImgContainerButton,
} from './styles'
import Logo from '../../../../assets/small-logo.svg'

interface InfoProps {
  lastUpdate: string
  createdAt: string
}

const Info = ({ createdAt, lastUpdate }: InfoProps) => {
  function renderImage(src?: string) {
    if (src) {
      return (
        <ImgContainerButton>
          <label htmlFor="info-image">
            <img src={src} />
            <input type="file" id="info-image" />
          </label>
        </ImgContainerButton>
      )
    }
    return (
      <ImageContainer>
        <DefaultImage src={Logo} />
        <ImgInputButton htmlFor="info-image">
          <span>Add Picture</span>
          <input type="file" id="info-image" />
        </ImgInputButton>
      </ImageContainer>
    )
  }

  return (
    <Container>
      <h3>Information and Highlight</h3>
      <p>Last Update: {lastUpdate}</p>
      <p>Created on: {createdAt}</p>
      {renderImage('https://picsum.photos/250/380')}
    </Container>
  )
}

export default Info
