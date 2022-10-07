import { useRef, useCallback } from 'react'
import * as Yup from 'yup'
import { FiLock } from 'react-icons/fi'
import {
  Navigate,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../contexts/auth-context'
import { useToast } from '../../contexts/toast-context'
import getValidationErrors from '../../utils/get-validation-errors'
import api from '../../services/api'
import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Container, Content, Background } from './styles'

interface RestPasswordFormData {
  password: string
  password_confirmation: string
}

type LocationProps = {
  state: {
    from: Location
  }
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { user } = useAuth()
  const { addToast } = useToast()

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const [searchParams] = useSearchParams()
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = useCallback(
    async (data: RestPasswordFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          password: Yup.string().required('Password required.'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Password must match',
          ),
        })
        await schema.validate(data, {
          abortEarly: false,
        })

        const { password, password_confirmation } = data
        const token = searchParams.get('token')

        if (!token) {
          throw new Error()
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        })

        navigate(from, { replace: true })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)

          return
        }
        addToast({
          type: 'error',
          title: 'Reset password error',
          description:
            'An error occurred when resetting password, please try again',
        })
      }
    },
    [addToast, navigate],
  )

  if (user) {
    return <Navigate to="/rper-list" />
  }

  return (
    <Container>
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Reset password</h2>
          <Input
            type="password"
            name="password"
            placeholder="New password"
            icon={FiLock}
          />
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            icon={FiLock}
          />
          <Button type="submit">Change Password</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  )
}

export default ResetPassword
