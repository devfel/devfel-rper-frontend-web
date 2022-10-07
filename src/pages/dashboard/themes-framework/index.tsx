import { RiExchangeFill } from 'react-icons/ri'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

const ThemesFramework: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        THEMES FRAMEWORK
      </h2>
      <TextEditor />
    </Container>
  )
}

export default ThemesFramework
