import { InputHTMLAttributes, useCallback, useRef } from 'react'
import * as Yup from 'yup'
import { FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import api from '../../services/api'
import { useAuth } from '../../contexts/auth-context'
import getValidationErrors from '../../utils/get-validation-errors'
import { useToast } from '../../contexts/toast-context'
import Button from '../../components/button'
import Input from '../../components/input'
import { Container, Content, PlaceholderLoading, AvatarInput } from './styles'

interface ProfileFormData {
  name: string
  email: string
  old_password: string
  password: string
  password_confirmation: string
}

type LocationProps = {
  state: {
    from: Location
  }
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { user, updatedUser } = useAuth()
  const { addToast } = useToast()

  const navigate = useNavigate()
  const location = useLocation() as unknown as LocationProps
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string()
            .matches(/^[A-Za-z ãáâéêèëíõóôúüçñø-]+$/, 'Enter a valid name.')
            .required('Name required.'),
          email: Yup.string()
            .required('Email required.')
            .email('Enter a valid email address.'),

          old_password: Yup.string(),

          password: Yup.string().when('old_password', {
            is: (value: InputHTMLAttributes<HTMLInputElement>) => !!value,
            then: Yup.string()
              .required('Password required')
              .min(6, 'Enter at least 6 digits.'),
            otherwise: Yup.string(),
          }),

          password_confirmation: Yup.string()
            .when('old_password', {
              is: (value: InputHTMLAttributes<HTMLInputElement>) => !!value,
              then: Yup.string().required('Password required'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Password must match'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })

        const { name, email, old_password, password, password_confirmation } =
          data

        const formData = {
          name,
          email,
          ...(old_password
            ? { old_password, password, password_confirmation }
            : {}),
        }

        const response = await api.put('/profile', formData)

        updatedUser(response.data)

        addToast({
          type: 'success',
          title: 'Profile updated!',
          description: 'Your profile information has been successfully updated',
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
          title: 'Update error',
          description:
            'An error occurred when updating profile, please try again',
        })
      }
    },
    [addToast, navigate],
  )

  const handleAvatarChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData()
        data.append('avatar', e.target.files[0])

        api.patch('/users/avatar', data).then(response => {
          updatedUser(response.data)

          addToast({
            type: 'success',
            title: 'Avatar updated!',
          })
        })
      }
    },
    [addToast, updatedUser],
  )

  return (
    <Container>
      <header>
        <Link to="/rper-list">
          <BsArrowLeft />
          Back
        </Link>
      </header>
      <Content>
        <AvatarInput>
          {user.avatar_url ? (
            <img src={user.avatar_url} alt={`${user.name}'s profile image`} />
          ) : (
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          )}
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>
        </AvatarInput>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ name: user.name, email: user.email }}
        >
          <h1>My Profile</h1>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            icon={FiUser}
            disabled
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            icon={FiMail}
            disabled
          />
          <Input
            type="password"
            name="old_password"
            placeholder="Current Password"
            icon={FiLock}
          />
          <Input
            type="password"
            name="password"
            placeholder="New Password"
            icon={FiLock}
          />
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            icon={FiLock}
          />
          <Button type="submit">Save Changes</Button>
        </Form>
      </Content>
    </Container>
  )
}

export default Profile
