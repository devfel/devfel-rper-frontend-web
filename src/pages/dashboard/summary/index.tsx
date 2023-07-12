/* eslint-disable indent */
import { useEffect, useState } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import Info from './info'
import {
  Container,
  Team,
  PlaceholderLoading,
  Progress,
  ProgressBarContainer,
  ProgressBar,
  Avatar,
} from './styles'
import { useParams } from 'react-router-dom'
import Menu from '../../../components/menu'
import Header from '../../../components/header'
import { Content, Main } from '../styles'
import { useRper } from '../../../contexts/rper-context'
import { useAuth } from '../../../contexts/auth-context'
import { useToast } from '../../../contexts/toast-context'
import { RequestStatus, RequestMessages } from '../../../enums/AuthEnum'
import api from '../../../services/api'

const Summary: React.FC = () => {
  const { id } = useParams()
  const { rper, findRper } = useRper()
  const { addToast } = useToast()
  const { logOut } = useAuth()

  useEffect(() => {
    findRper(`${id}`)
  }, [])

  const handleBackgroundChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const data = new FormData()
      data.append('background', event.target.files[0])

      api
        .patch(`/rpers/${id}/background`, data)
        .then(() => {
          findRper(`${id}`)
          addToast({ title: 'Background updated!', type: 'success' })
        })
        .catch(error => {
          if (
            error.response.status === RequestStatus.UNAUTHORIZED &&
            error.response.data.message === RequestMessages.INVALID_TOKEN
          ) {
            logOut()
          }

          console.log(error)
        })
    }
  }

  return (
    <>
      <Header />
      <Main>
        <h1>{rper?.name}</h1>
        <Menu />

        <Content>
          <Container>
            <h2>
              <RiExchangeFill />
              SUMMARY
            </h2>
            <Team>
              <h3>Team</h3>
              <article>
                <section>
                  <div>
                    {rper?.coordinator.avatar_url ? (
                      <Avatar>
                        <img
                          src={rper?.coordinator.avatar_url}
                          alt="Avatar do coordenador"
                        />
                      </Avatar>
                    ) : (
                      <PlaceholderLoading>
                        <div></div>
                        <div></div>
                      </PlaceholderLoading>
                    )}
                  </div>
                  <strong>{rper?.coordinator.name} (Coordinator)</strong>
                </section>
                {rper?.members && rper?.members.length > 0
                  ? rper?.members.map(member => (
                      <section key={member.user_id}>
                        <div>
                          {member.avatar_url ? (
                            <Avatar>
                              <img
                                src={member.avatar_url}
                                alt="Avatar do coordenador"
                              />
                            </Avatar>
                          ) : (
                            <PlaceholderLoading>
                              <div></div>
                              <div></div>
                            </PlaceholderLoading>
                          )}
                        </div>
                        <strong>{member.name}</strong>
                      </section>
                    ))
                  : null}
              </article>
            </Team>
            <Info
              lastUpdate={new Date(
                rper?.updated_at || new Date(),
              ).toLocaleDateString('pt-BR')}
              createdAt={new Date(
                rper?.created_at || new Date(),
              ).toLocaleDateString('pt-BR')}
              handleBackgroundChange={handleBackgroundChange}
              background={rper?.background_url}
            />
            <Progress>
              <h3>RPER Application Progress</h3>
              <ProgressBarContainer>
                <ProgressBar progress={rper?.progress as number}>
                  <div></div>
                </ProgressBar>
                <strong>{rper?.progress}%</strong>
              </ProgressBarContainer>
            </Progress>
            {/* <Carousel /> */}
          </Container>
        </Content>
      </Main>
    </>
  )
}

export default Summary
