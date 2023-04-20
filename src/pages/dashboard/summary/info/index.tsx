import {
  Container,
  DefaultImage,
  ImageContainer,
  ImgInputButton,
  ImgContainerButton,
} from './styles'
import Logo from '../../../../assets/small-logo.svg'

const Info: React.FC = () => {
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
      <p>Last Update: 20/02/2021</p>
      <p>Created on: 13/02/2019</p>
      {renderImage('https://picsum.photos/250/380')}
    </Container>
  )
}

export default Info
