import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const DailyRoutines: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        DAILY ROUTINES
      </h2>
      <TextEditor />
    </Container>
  )
}

export default DailyRoutines
