import { useState } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import Carousel from './carousel'
import {
  Container,
  Team,
  PlaceholderLoading,
  Info,
  Progress,
  ProgressBarContainer,
  ProgressBar,
} from './styles'

const Summary: React.FC = () => {
  const [progress, setProgress] = useState(70)

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        SUMMARY
      </h2>
      <Team>
        <h3>Team</h3>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname (Coordinator)</strong>
        </article>
      </Team>
      <Info>
        <h3>Information and Highlight</h3>
        <p>Last Update: 20/02/2021</p>
        <p>Created on: 13/02/2019</p>
        <img src="https://picsum.photos/250/380" alt="" />
      </Info>
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
  )
}

export default Summary
