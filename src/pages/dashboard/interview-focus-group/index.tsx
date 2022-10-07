import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const InterviewFocusGroup: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        INTERVIEW & FOCUS GROUP
      </h2>
      <TextEditor />
    </Container>
  )
}

export default InterviewFocusGroup
