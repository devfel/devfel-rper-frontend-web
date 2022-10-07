import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import { BsArrowLeft } from 'react-icons/bs'
import { useAuth } from '../../contexts/auth-context'
import ProfileInfo from '../profile-info'
import SmLogo from '../../assets/small-logo.svg'
import { HeaderContainer, HeaderContent, ButtonType } from './styles'

interface HeaderProp {
  btnType?: 'signOut' | 'back'
}

const Header: React.FC<HeaderProp> = ({ btnType }) => {
  const { logOut } = useAuth()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={SmLogo}
          alt="Rapid Participatory Emancipatory Research logo"
        />
        <ProfileInfo />
      </HeaderContent>
      <ButtonType btnType={btnType}>
        {btnType ? (
          <button type="button" onClick={logOut}>
            <FiPower />
            Sign Out
          </button>
        ) : (
          <Link to="/rper-list">
            <BsArrowLeft />
            Back
          </Link>
        )}
      </ButtonType>
    </HeaderContainer>
  )
}

export default Header
