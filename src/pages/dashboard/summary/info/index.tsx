import { FiImage } from 'react-icons/fi'
import { Container, ImageContainer, PlaceholderLoading } from './styles'

interface InfoProps {
  lastUpdate: string
  createdAt: string
  handleBackgroundChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  background: string | undefined
}

const Info = ({
  createdAt,
  lastUpdate,
  handleBackgroundChange,
  background,
}: InfoProps) => {
  return (
    <Container>
      <h3>Information and Highlight</h3>
      <p>Last Update: {lastUpdate}</p>
      <p>Created on: {createdAt}</p>
      <ImageContainer>
        <label htmlFor="rper-background">
          {background ? (
            <img src={background} alt="RPER background" />
          ) : (
            <PlaceholderLoading>
              <FiImage />
            </PlaceholderLoading>
          )}
          <input
            type="file"
            id="rper-background"
            hidden
            onChange={handleBackgroundChange}
          />
        </label>
      </ImageContainer>
    </Container>
  )
}

export default Info
