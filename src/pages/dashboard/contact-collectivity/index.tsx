import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const ContactCollectivity: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        CONTACT COLLECTIVITY
      </h2>
      <TextEditor />
    </Container>
  )
}

export default ContactCollectivity
