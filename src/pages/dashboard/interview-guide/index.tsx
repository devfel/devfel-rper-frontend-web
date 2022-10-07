import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const InterviewGuide: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        INTERVIEW GUIDE
      </h2>
      <TextEditor />
    </Container>
  )
}

export default InterviewGuide
