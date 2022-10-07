import { useCallback, useRef, forwardRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { AiOutlineClose } from 'react-icons/ai'
import api from '../../../services/api'
import getValidationErrors from '../../../utils/get-validation-errors'
import Input from '../../../components/input'
import { useToast } from '../../../contexts/toast-context'
import { useAuth } from '../../../contexts/auth-context'
import { Modal } from './styles'

interface SignUpFormData {
  rperName: string
}

const NewRperModal: React.ForwardRefRenderFunction<HTMLDialogElement> = (
  props,
  ref,
) => {
  const { user } = useAuth()
  const { addToast } = useToast()

  const navigate = useNavigate()

  const formRef = useRef<FormHandles>(null)
  let refCurrent: HTMLDialogElement | null

  useEffect(() => {
    if (ref != null && typeof ref !== 'function') {
      refCurrent = ref.current
    }
  }, [])

  const closeModal = useCallback(() => {
    refCurrent?.close()

    formRef.current?.reset()
    formRef.current?.setErrors({})
  }, [ref])

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          rperName: Yup.string().required('Name required.'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })

        const { rperName } = data

        const formData = {
          name: rperName,
          coordinator_id: user.user_id,
        }

        const response = await api.post('/rpers', formData)

        const { rper_id } = response.data

        addToast({
          type: 'success',
          title: 'RPER successfully created!',
          description: 'You can now work on it',
        })

        navigate(`/dashboard/${rper_id}`)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)

          return
        }
        addToast({
          type: 'error',
          title: 'Create RPER error',
          description:
            'An error occurred when creating a RPER, please try again',
        })
      }
    },
    [addToast],
  )

  return (
    <Modal ref={ref}>
      <button type="button" onClick={closeModal}>
        <AiOutlineClose />
      </button>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="rperName">RPER Name:</label>
        <Input type="text" name="rperName" id="rperName" />
        <p>
          <span>Coordinator: </span>
          <strong>{user.name}</strong>
        </p>
        <button type="submit">Create RPER</button>
      </Form>
    </Modal>
  )
}

export default forwardRef(NewRperModal)
