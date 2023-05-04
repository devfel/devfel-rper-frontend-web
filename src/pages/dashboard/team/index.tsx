/* eslint-disable indent */
import { useCallback, useEffect, useRef, useState } from 'react'
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

import Header from '../../../components/header'
import { Content, Main } from '../styles'
import Menu from '../../../components/menu'
import api from '../../../services/api'
import { Rper, User } from '../types'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../../contexts/auth-context'
import { RemoveMemberRper } from './types'

const Team: React.FC = () => {
  const { id } = useParams()
  const usersModalRef = useRef<HTMLDialogElement>(null)
  const confirmationModalRef = useRef<HTMLDialogElement>(null)
  const [typeOfConfirmationModal, setTypeOfConfirmationModal] = useState('')
  const [transferCoord, setTransferCoord] = useState('')
  const [removeMember, setRemoveMember] = useState({})
  const [rper, setRper] = useState<Rper>()
  const [users, setUsers] = useState<User[]>()

  const getRper = async () => {
    try {
      const response = await api.get<Rper>(`rpers/${id}`)
      setRper(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getUsers = async () => {
    try {
      const response = await api.get<User[]>('users')
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleMembers = async (updatedMembersIds: string[]) => {
    try {
      await api.post('rpers/members', {
        rper_id: rper?.rper_id,
        users_ids: updatedMembersIds,
      })

      await getRper()
      await getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRper()
    getUsers()
  }, [])

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

  const handleConfirmRemoveMember = useCallback(
    ({ member_id, member_name, rper_id }: RemoveMemberRper) => {
      setTypeOfConfirmationModal('remove')
      setRemoveMember({
        member_id,
        member_name,
        rper_id,
      })
      confirmationModalRef.current?.showModal()
    },
    [confirmationModalRef],
  )

  const handleRemoveMember = async (rper_id: string, user_id: string) => {
    try {
      await api.patch(`rpers/${rper_id}/members/${user_id}`)

      await getRper()
      await getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  const { user } = useAuth()

  const isCoordinator = rper?.coordinator_id === user.user_id

  const isMember = rper?.members.some(member => member.user_id === user.user_id)

  return (
    <>
      <Header />
      <Main>
        <Menu />
        <Content>
          <Container>
            <h2>
              <RiExchangeFill />
              TEAM
            </h2>
            <TeamContainer>
              <TeamHeader>
                <h3>Team</h3>
                {isCoordinator ? (
                  <button onClick={openModal}>
                    <IoMdAdd />
                  </button>
                ) : null}
              </TeamHeader>
              <MemberCard>
                <AvatarContainer>
                  {rper?.coordinator ? (
                    <img
                      src={rper.coordinator.avatar_url}
                      alt={`${rper.coordinator.name}'s profile image`}
                    />
                  ) : (
                    <PlaceholderLoading>
                      <div></div>
                      <div></div>
                    </PlaceholderLoading>
                  )}
                </AvatarContainer>
                <MemberInfoContainer>
                  <strong>{rper?.coordinator.name}</strong>
                  <span>
                    <BiCrown />
                  </span>
                </MemberInfoContainer>
              </MemberCard>
              {rper?.members && rper.members.length > 0
                ? rper.members.map(member => (
                    <MemberCard key={member.user_id}>
                      <AvatarContainer>
                        {member.avatar_url ? (
                          <img
                            src={member.avatar_url}
                            alt={`${member.name}'s profile image`}
                          />
                        ) : (
                          <PlaceholderLoading>
                            <div></div>
                            <div></div>
                          </PlaceholderLoading>
                        )}
                      </AvatarContainer>
                      <MemberInfoContainer>
                        <strong>{member.name}</strong>
                        <span>
                          <CoordinatorButtonsManagementContainer>
                            {/* <PromoteToCoordinatorButton
                              onClick={() =>
                                handleTransferCoordinator(member.name)
                              }
                            >
                              <BiCrown />
                            </PromoteToCoordinatorButton> */}
                            {isCoordinator ? (
                              <RemoveMemberButton
                                onClick={() =>
                                  handleConfirmRemoveMember({
                                    member_id: member.user_id,
                                    member_name: member.name,
                                    rper_id: rper.rper_id,
                                  })
                                }
                              >
                                <IoMdRemove />
                              </RemoveMemberButton>
                            ) : null}
                          </CoordinatorButtonsManagementContainer>
                        </span>
                      </MemberInfoContainer>
                    </MemberCard>
                  ))
                : null}
            </TeamContainer>

            <AddTeamModal
              ref={usersModalRef}
              rper={rper}
              users={users}
              handleMembers={handleMembers}
            />
            <ConfirmationActionModal
              ref={confirmationModalRef}
              typeOfModel={typeOfConfirmationModal}
              data={removeMember}
              handleMembers={handleRemoveMember}
            />
          </Container>
        </Content>
      </Main>
    </>
  )
}

export default Team
