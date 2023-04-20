import { useCallback, useRef, useState } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import AddTeamModal from './modals/modal-add-team'
import ConfirmationActionModal from './modals/modal-confirmation-action'
import { BiCrown } from 'react-icons/bi'
import {
  Container,
  TeamContainer,
  TeamHeader,
  PlaceholderLoading,
  MemberCard,
  AvatarContainer,
  MemberInfoContainer,
  CoordinatorButtonsManagementContainer,
  PromoteToCoordinatorButton,
  RemoveMemberButton,
} from './styles'

// TODO: remove this import when integrated to back-end
import { mockedUsers } from './users'

const Team: React.FC = () => {
  const usersModalRef = useRef<HTMLDialogElement>(null)
  const confirmationModalRef = useRef<HTMLDialogElement>(null)
  const [typeOfConfirmationModal, setTypeOfConfirmationModal] = useState('')
  const [transferCoord, setTransferCoord] = useState('')

  const openModal = useCallback(() => {
    usersModalRef.current?.showModal()
  }, [usersModalRef])

  const handleTransferCoordinator = useCallback(
    (user: string) => {
      setTypeOfConfirmationModal('transfer')
      setTransferCoord(user)
      confirmationModalRef.current?.showModal()
    },
    [confirmationModalRef],
  )

  const handleRemoveMember = useCallback(
    (user: string) => {
      setTypeOfConfirmationModal('remove')
      setTransferCoord(user)
      confirmationModalRef.current?.showModal()
    },
    [confirmationModalRef],
  )

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        TEAM
      </h2>
      <TeamContainer>
        <TeamHeader>
          <h3>Team</h3>
          <button onClick={openModal}>
            <IoMdAdd />
          </button>
        </TeamHeader>
        {mockedUsers.map(user => (
          <MemberCard key={user.id}>
            <AvatarContainer>
              <PlaceholderLoading>
                <div></div>
                <div></div>
              </PlaceholderLoading>
            </AvatarContainer>
            <MemberInfoContainer>
              <strong>{user.name}</strong>
              <span>
                {user.isCoordinator ? (
                  <BiCrown />
                ) : (
                  <CoordinatorButtonsManagementContainer>
                    <PromoteToCoordinatorButton
                      onClick={() => handleTransferCoordinator(user.name)}
                    >
                      <BiCrown />
                    </PromoteToCoordinatorButton>
                    <RemoveMemberButton
                      onClick={() => handleRemoveMember(user.name)}
                    >
                      <IoMdRemove />
                    </RemoveMemberButton>
                  </CoordinatorButtonsManagementContainer>
                )}
              </span>
            </MemberInfoContainer>
          </MemberCard>
        ))}
      </TeamContainer>

      <AddTeamModal ref={usersModalRef} />
      <ConfirmationActionModal
        ref={confirmationModalRef}
        typeOfModel={typeOfConfirmationModal}
        user={transferCoord}
      />
    </Container>
  )
}

export default Team
