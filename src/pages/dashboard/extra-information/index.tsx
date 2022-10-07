import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const ExtraInformation: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        EXTRA INFORMATION
      </h2>
      <TextEditor />
    </Container>
  )
}

export default ExtraInformation
