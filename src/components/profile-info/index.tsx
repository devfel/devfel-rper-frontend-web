import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'
import { Container, PlaceholderLoading } from './styles'

const ProfileInfo: React.FC = () => {
  const { user } = useAuth()

  return (
    <>
      <Container>
        {user.avatar_url ? (
          <img src={user.avatar_url} alt={`${user.name}'s profile image`} />
        ) : (
          <PlaceholderLoading>
            <div></div>
            <div></div>
          </PlaceholderLoading>
        )}
        <Link to="/profile">
          <div>
            <span>Welcome,</span>
            <strong>{user.name}</strong>
          </div>
        </Link>
      </Container>
    </>
  )
}

export default ProfileInfo
