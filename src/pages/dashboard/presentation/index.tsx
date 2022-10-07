import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const Presentation: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        PRESENTATION
      </h2>
      <TextEditor />
    </Container>
  )
}

export default Presentation
