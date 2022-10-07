import logoRper from '../../assets/logo-rper.png'
import { Container, Title, Initials, Description } from './styles'

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={logoRper} alt="Rapid Participatory Emacipatory Research Logo" />
      <Title>Rapid Participatory Emacipatory Research</Title>
      <Initials>RPER</Initials>
      <Description>Social Management Software</Description>
    </Container>
  )
}

export default Logo
