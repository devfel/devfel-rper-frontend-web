import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const FinalConsiderations: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        FINAL CONSIDERATIONS
      </h2>
      <TextEditor />
    </Container>
  )
}

export default FinalConsiderations
