import { RiExchangeBoxFill } from 'react-icons/ri'
import Header from '../../../components/header'
import Menu from '../../../components/menu'
import { Content, Main } from '../styles'
import { ActionButtons, Container } from './styles'
import Button from '../../../components/button'
import api from '../../../services/api'
import { useParams } from 'react-router-dom'
import { useToast } from '../../../contexts/toast-context'

const GenerateFinalReport: React.FC = () => {
  const { id } = useParams()
  const { addToast } = useToast()

  const generateDocFile = async () => {
    try {
      const response = await api.get(`/rpers/${id}/report`, {
        responseType: 'blob',
      })

      const downloadUrl = window.URL.createObjectURL(response.data)
      const link = document.createElement('a')

      link.href = downloadUrl

      link.setAttribute('download', `${id}-${new Date().getTime()}.docx`) // Defina o nome do arquivo como desejar
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Saving content',
        description:
          'Oops! Something wrong happening while download your report. Please try again',
      })

      console.log(error)
    }
  }

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
              <Button onClick={generateDocFile}>Doc file</Button>
              {/* <Button>PDF</Button> */}
            </ActionButtons>
          </Container>
        </Content>
      </Main>
    </>
  )
}

export default GenerateFinalReport
