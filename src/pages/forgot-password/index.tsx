import { useRef, useCallback, useState } from 'react'
import * as Yup from 'yup'
import { FiArrowLeft, FiMail } from 'react-icons/fi'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Form } from '@unform/web'
import { useAuth } from '../../contexts/auth-context'
import { FormHandles } from '@unform/core'
import { useToast } from '../../contexts/toast-context'
import api from '../../services/api'
import getValidationErrors from '../../utils/get-validation-errors'
import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Container, Content, Background } from './styles'

interface ForgotPasswordFormData {
  email: string
}

type LocationProps = {
  state: {
    from: Location
  }
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<FormHandles>(null)

  const { user } = useAuth()
  const { addToast } = useToast()

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true)

        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email required.')
            .email('Enter a valid email address.'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })

        await api.post('/password/forgot', {
          email: data.email,
        })

        addToast({
          type: 'success',
          title: 'Recovery e-mail sent',
          description:
            'We have sent you an email for password recovery, please check your inbox',
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
          title: 'Password recovery error',
          description:
            'An error occurred when trying to reset your password, please try again',
        })
      } finally {
        setLoading(false)
      }
    },
    [addToast],
  )

  if (user) {
    return <Navigate to="/rper-list" />
  }

  return (
    <Container>
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Password Recovery</h2>
          <Input type="text" name="email" placeholder="Email" icon={FiMail} />
          <Button loading={loading} type="submit">
            Recover
          </Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Back to Log In
        </Link>
      </Content>
      <Background />
    </Container>
  )
}

export default ForgotPassword
