import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const InputAndOutput: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        INPUT AND OUTPUT
      </h2>
      <TextEditor />
    </Container>
  )
}

export default InputAndOutput
