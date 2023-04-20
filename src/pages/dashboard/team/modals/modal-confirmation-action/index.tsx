import { forwardRef, useCallback, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../../../../../components/button'
import { Modal, ButtonContainer } from './styles'

interface ModalProps {
  typeOfModel: string
  user: string
}

const ConfirmationActionModal: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  ModalProps
> = (props, ref) => {
  let refCurrent: HTMLDialogElement | null

  useEffect(() => {
    if (ref != null && typeof ref !== 'function') {
      refCurrent = ref.current
    }
  }, [])

  const closeModal = useCallback(() => {
    refCurrent?.close()
  }, [ref])

  return (
    <Modal ref={ref}>
      <button type="button" onClick={closeModal}>
        <AiOutlineClose />
      </button>

      {props.typeOfModel === 'transfer' ? (
        <>
          <h3>Transfer Coordinator</h3>
          <p>
            Are you sure you want to transfer coordination to member{' '}
            <strong>{props.user}</strong>?
          </p>
        </>
      ) : (
        <>
          <h3>Remove Member</h3>
          <p>
            Are you sure you want to remove member <strong>{props.user}</strong>
            ?
          </p>
        </>
      )}

      <ButtonContainer>
        <Button>Confirm</Button>
      </ButtonContainer>
    </Modal>
  )
}

export default forwardRef(ConfirmationActionModal)
