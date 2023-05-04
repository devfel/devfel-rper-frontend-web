import { forwardRef, useCallback, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../../../../../components/button'
import { Modal, ButtonContainer } from './styles'
import api from '../../../../../services/api'

interface ModalProps {
  typeOfModel: string
  data: Record<string, any>
  handleMembers: (rper_id: string, user_id: string) => void
}

const ConfirmationActionModal: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  ModalProps
> = ({ data, typeOfModel, handleMembers }, ref) => {
  let refCurrent: HTMLDialogElement | null

  useEffect(() => {
    if (ref != null && typeof ref !== 'function') {
      refCurrent = ref.current
    }
  }, [])

  const closeModal = useCallback(() => {
    refCurrent?.close()
  }, [ref])

  const handleAction = async (rper_id: string, user_id: string) => {
    try {
      handleMembers(rper_id, user_id)

      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal ref={ref}>
      <button type="button" onClick={closeModal}>
        <AiOutlineClose />
      </button>

      {typeOfModel === 'transfer' ? (
        <>
          <h3>Transfer Coordinator</h3>
          <p>
            Are you sure you want to transfer coordination to member{' '}
            <strong>{data.member_name}</strong>?
          </p>
        </>
      ) : (
        <>
          <h3>Remove Member</h3>
          <p>
            Are you sure you want to remove member{' '}
            <strong>{data.member_name}</strong>?
          </p>
        </>
      )}

      <ButtonContainer>
        <Button onClick={() => handleAction(data.rper_id, data.member_id)}>
          Confirm
        </Button>
      </ButtonContainer>
    </Modal>
  )
}

export default forwardRef(ConfirmationActionModal)
