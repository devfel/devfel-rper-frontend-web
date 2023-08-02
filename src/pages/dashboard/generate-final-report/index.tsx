import { RiExchangeBoxFill } from 'react-icons/ri'
import Header from '../../../components/header'
import Menu from '../../../components/menu'
import { Content, Main } from '../styles'
import { ActionButtons, Container } from './styles'
import Button from '../../../components/button'

const GenerateFinalReport: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>RPER</h1>
        <Menu />
        <Content>
          <Container>
            <h2>
              <RiExchangeBoxFill />
              GENERATE FINAL REPORT
            </h2>
            <div>
              <p>
                At this stage you can generate reports on this RPER, the report
                will consider all the information that are with the Completed
                and the In Progress status ONLY.
              </p>
            </div>
            <ActionButtons>
              <Button>Word</Button>
              <Button>PDF</Button>
            </ActionButtons>
          </Container>
        </Content>
      </Main>
    </>
  )
}

export default GenerateFinalReport
