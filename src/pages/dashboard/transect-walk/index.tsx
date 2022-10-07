import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const TransectWalk: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        TRANSECT WALK
      </h2>
      <TextEditor />
    </Container>
  )
}

export default TransectWalk
