import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const FocusGroupGuide: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        FOCUS GROUP GUIDE
      </h2>
      <TextEditor />
    </Container>
  )
}

export default FocusGroupGuide
