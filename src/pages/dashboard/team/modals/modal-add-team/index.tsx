import { forwardRef, useCallback, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../../../../../components/button'
import {
  Modal,
  PlaceholderLoading,
  TeamContainer,
  ButtonContainer,
} from './styles'

const AddTeamModal: React.ForwardRefRenderFunction<HTMLDialogElement> = (
  props,
  ref,
) => {
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
      <TeamContainer>
        <label htmlFor="1">
          <input type="radio" id="1" name="member" />
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>User</strong>
        </label>
        <label htmlFor="2">
          <input type="radio" id="2" name="member" />
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>User</strong>
        </label>
        <label htmlFor="3">
          <input type="radio" id="3" name="member" />
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>User</strong>
        </label>
        <label htmlFor="4">
          <input type="radio" id="4" name="member" />
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>User</strong>
        </label>
        <label htmlFor="5">
          <input type="radio" id="5" name="member" />
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>User</strong>
        </label>
        <label htmlFor="6">
          <input type="radio" id="6" name="member" />
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>User</strong>
        </label>
        <label htmlFor="7">
          <input type="radio" id="7" name="member" />
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>User</strong>
        </label>
      </TeamContainer>
      <ButtonContainer>
        <Button>Add Member</Button>
      </ButtonContainer>
    </Modal>
  )
}

export default forwardRef(AddTeamModal)
