import { useState } from 'react'
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
  )
}

export default Summary
