/* eslint-disable indent */
import { useEffect, useState } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import Carousel from './carousel'
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
import api from '../../../services/api'
import { Rper } from '../types'
import Menu from '../../../components/menu'
import Header from '../../../components/header'
import { Content, Main } from '../styles'

const Summary: React.FC = () => {
  const [progress, setProgress] = useState(70)
  const [rper, setRper] = useState<Rper>()
  const { id } = useParams()

  const getRper = async () => {
    try {
      const response = await api.get<Rper>(`rpers/${id}`)
      setRper(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRper()
  }, [])

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
            <Info />
            <Progress>
              <h3>RPER Application Progress</h3>
              <ProgressBarContainer>
                <ProgressBar progress={progress}>
                  <div></div>
                </ProgressBar>
                <strong>{progress}%</strong>
              </ProgressBarContainer>
            </Progress>
            <Carousel />
          </Container>
        </Content>
      </Main>
    </>
  )
}

export default Summary
