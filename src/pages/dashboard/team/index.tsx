import { RiExchangeFill } from 'react-icons/ri'
import { IoMdAdd } from 'react-icons/io'
import {
  Container,
  TeamContainer,
  TeamHeader,
  PlaceholderLoading,
} from './styles'

const Team: React.FC = () => {
  return (
    <Container>
      <h2>
        <RiExchangeFill />
        TEAM
      </h2>
      <TeamContainer>
        <TeamHeader>
          <h3>Team</h3>
          <button>
            <IoMdAdd />
          </button>
        </TeamHeader>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname (Coordinator)</strong>
        </article>
      </TeamContainer>
    </Container>
  )
}

export default Team
