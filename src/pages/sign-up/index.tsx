import { useCallback, useRef } from 'react'
import * as Yup from 'yup'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import api from '../../services/api'
import { useAuth } from '../../contexts/auth-context'
import getValidationErrors from '../../utils/get-validation-errors'
import { useToast } from '../../contexts/toast-context'
import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Container, Content, Background } from './styles'

interface SignUpFormData {
  name: string
  email: string
  password: string
}

type LocationProps = {
  state: {
    from: Location
  }
}

const SignUp: React.FC = () => {
  const { user } = useAuth()
  const { addToast } = useToast()

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const from = location.state?.from?.pathname || '/'

  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string()
            .matches(/^[A-Za-z ãáâéêèëíõóôúüçñø-]+$/, 'Enter a valid name.')
            .required('Name required.'),
          email: Yup.string()
            .required('Email required.')
            .email('Enter a valid email address.'),
          password: Yup.string().min(6, 'Enter at least 6 digits.'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })

        await api.post('/users', data)

        addToast({
          type: 'success',
          title: 'Registration successfully completed!',
          description: 'You can now log in to RPER',
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
          title: 'Registration error',
          description: 'An error occurred when signing up, please try again',
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
      <Background />
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Sign Up - For Team Members</h2>
          <Input type="text" name="name" placeholder="Name" icon={FiUser} />
          <Input type="text" name="email" placeholder="Email" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            icon={FiLock}
          />
          <Button type="submit">Create Account</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Back to Log In
        </Link>
      </Content>
    </Container>
  )
}

export default SignUp
