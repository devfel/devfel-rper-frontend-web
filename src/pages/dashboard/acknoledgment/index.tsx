import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const Acknoledgment: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        ACKNOLEDGMENT
      </h2>
      <TextEditor
        isReadOnly
        handleTextChange={() => {
          null
        }}
        content=""
        handleUploadImage={() => null}
      />
    </Container>
  )
}

export default Acknoledgment
