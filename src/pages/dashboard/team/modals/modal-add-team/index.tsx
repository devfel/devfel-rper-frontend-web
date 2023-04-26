/* eslint-disable indent */
import { forwardRef, useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../../../../../components/button'
import {
  Modal,
  PlaceholderLoading,
  TeamContainer,
  ButtonContainer,
  Avatar,
} from './styles'
import { Rper, User } from '../../../types'

interface AddTeamModalProps {
  rper: Rper | undefined
  users: User[] | undefined
  handleMembers: (membersIds: string[]) => void
}

const AddTeamModal: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  AddTeamModalProps
> = ({ rper, users, handleMembers }, ref) => {
  let refCurrent: HTMLDialogElement | null
  const [nonMembers, setNonMembers] = useState<User[]>()
  const [selectedMember, setSelectedMember] = useState('')

  const isMember = (user: User) => {
    const isMember =
      rper && rper.members.some(member => member.user_id === user.user_id)

    return isMember
  }

  useEffect(() => {
    if (ref != null && typeof ref !== 'function') {
      refCurrent = ref.current
    }
  }, [])

  useEffect(() => {
    setNonMembers(
      users?.filter(
        user => !isMember(user) && user.user_id !== rper?.coordinator_id,
      ),
    )
  }, [users])

  const closeModal = useCallback(() => {
    refCurrent?.close()
  }, [ref])

  const handleAddMember = () => {
    const membersIds = users
      ?.filter(user => isMember(user) && user.user_id !== rper?.coordinator_id)
      .map(filteredUsers => filteredUsers.user_id) as string[]

    const updatedMembers = [...membersIds, selectedMember]

    handleMembers(updatedMembers)

    closeModal()
  }

  return (
    <Modal ref={ref}>
      <button type="button" onClick={closeModal}>
        <AiOutlineClose />
      </button>
      <TeamContainer>
        {nonMembers && nonMembers?.length > 0
          ? nonMembers.map(user => (
              <label htmlFor={user.user_id} key={user.user_id}>
                <input
                  type="radio"
                  id={user.user_id}
                  name="member"
                  onClick={() => setSelectedMember(user.user_id)}
                />
                {user.avatar_url ? (
                  <Avatar>
                    <img src={user.avatar_url} alt="Avatar do usuário" />
                  </Avatar>
                ) : (
                  <div>
                    <PlaceholderLoading>
                      <div></div>
                      <div></div>
                    </PlaceholderLoading>
                  </div>
                )}
                <strong>{user.name}</strong>
              </label>
            ))
          : null}
      </TeamContainer>
      <ButtonContainer>
        <Button onClick={handleAddMember}>Add Member</Button>
      </ButtonContainer>
    </Modal>
  )
}

export default forwardRef(AddTeamModal)
