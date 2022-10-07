import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const CollectivityRegistration: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        COLLECTIVITY REGISTRATION
      </h2>
      <TextEditor />
    </Container>
  )
}

export default CollectivityRegistration
