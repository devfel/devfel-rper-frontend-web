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
        updateReadOnlyFunction={() => false}
        handleTextChange={() => {
          null
        }}
        content=""
      />
    </Container>
  )
}

export default Acknoledgment
