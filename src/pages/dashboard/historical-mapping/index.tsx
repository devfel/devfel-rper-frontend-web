import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const HistoricalMapping: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        HISTORICAL MAPPING
      </h2>
      <TextEditor />
    </Container>
  )
}

export default HistoricalMapping
