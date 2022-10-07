import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const SecondaryData: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        SECONDARY DATA
      </h2>
      <TextEditor />
    </Container>
  )
}

export default SecondaryData
