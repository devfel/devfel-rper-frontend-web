import { useEffect, useState } from 'react'
import Header from '../../../components/header'
import Menu from '../../../components/menu'
import EditorComponent from '../editor-component'
import { Content, Main } from '../styles'
import { useParams } from 'react-router-dom'
import api from '../../../services/api'
import { Rper } from '../types'

const SecondaryData: React.FC = () => {
  const { id } = useParams()
  const [contentText, setContentText] = useState('')
  const [readOnly, setReadOnly] = useState(true)
  const [rper, setRper] = useState<Rper>()

  const getRper = async () => {
    try {
      const response = await api.get<Rper>(`rpers/${id}`)

      setRper(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSave = async () => {
    try {
      await api.put(`rpers/${id}/secondary-data`, {
        content: contentText,
      })
      setReadOnly(true)
      setContentText(contentText)
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
          <EditorComponent
            title={'SECONDARY DATA'}
            handleTextChange={setContentText}
            handleSave={handleSave}
            isReadOnly={readOnly}
            handleReadOnly={setReadOnly}
            content={contentText || rper?.secondaryData.content || ''}
          />
        </Content>
      </Main>
    </>
  )
}

export default SecondaryData
