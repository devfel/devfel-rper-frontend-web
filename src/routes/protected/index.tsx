import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'

const Protected: React.FC = () => {
  const { user } = useAuth()
  const location = useLocation()

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default Protected
