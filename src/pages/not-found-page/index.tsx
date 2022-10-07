import { Link } from 'react-router-dom'
import { Main } from './styles'

const NotFoundPage: React.FC = () => {
  return (
    <Main>
      <h1>404</h1>
      <h2>Page not found.</h2>
      <p>
        The page you are looking for does not exist or an error has occurred.
      </p>
      <p>
        Please try again later or <Link to="/">go back to main page</Link>.
      </p>
    </Main>
  )
}

export default NotFoundPage
