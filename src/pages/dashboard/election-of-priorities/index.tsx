import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const ElectionOfPriorities: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        ELECTION OF PRIORITIES
      </h2>
      <TextEditor />
    </Container>
  )
}

export default ElectionOfPriorities
