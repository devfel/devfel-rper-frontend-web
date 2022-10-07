import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const VennDiagram: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        VENN DIAGRAM
      </h2>
      <TextEditor />
    </Container>
  )
}

export default VennDiagram
