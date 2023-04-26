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

const Team: React.FC = () => {
  const { id } = useParams()
  const usersModalRef = useRef<HTMLDialogElement>(null)
  const confirmationModalRef = useRef<HTMLDialogElement>(null)
  const [typeOfConfirmationModal, setTypeOfConfirmationModal] = useState('')
  const [transferCoord, setTransferCoord] = useState('')
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

  const handleRemoveMember = useCallback(
    (user: string) => {
      setTypeOfConfirmationModal('remove')
      setTransferCoord(user)
      confirmationModalRef.current?.showModal()
    },
    [confirmationModalRef],
  )

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
                <button onClick={openModal}>
                  <IoMdAdd />
                </button>
              </TeamHeader>
              <MemberCard>
                <AvatarContainer>
                  <PlaceholderLoading>
                    <div></div>
                    <div></div>
                  </PlaceholderLoading>
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
                        <PlaceholderLoading>
                          <div></div>
                          <div></div>
                        </PlaceholderLoading>
                      </AvatarContainer>
                      <MemberInfoContainer>
                        <strong>{member.name}</strong>
                        <span>
                          <CoordinatorButtonsManagementContainer>
                            <PromoteToCoordinatorButton
                              onClick={() =>
                                handleTransferCoordinator(member.name)
                              }
                            >
                              <BiCrown />
                            </PromoteToCoordinatorButton>
                            <RemoveMemberButton
                              onClick={() => handleRemoveMember(member.name)}
                            >
                              <IoMdRemove />
                            </RemoveMemberButton>
                          </CoordinatorButtonsManagementContainer>
                        </span>
                      </MemberInfoContainer>
                    </MemberCard>
                  ))
                : null}
            </TeamContainer>

            <AddTeamModal ref={usersModalRef} rper={rper} users={users} />
            <ConfirmationActionModal
              ref={confirmationModalRef}
              typeOfModel={typeOfConfirmationModal}
              user={transferCoord}
            />
          </Container>
        </Content>
      </Main>
    </>
  )
}

export default Team
