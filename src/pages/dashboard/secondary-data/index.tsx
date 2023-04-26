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

  console.log(rper)

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
        <Menu />
        <Content>
          <EditorComponent
            title={'SECONDARY DATA'}
            handleTextChange={setContentText}
            handleSave={handleSave}
            isReadOnly={readOnly}
            handleReadOnly={setReadOnly}
            content={rper?.secondaryData.content || ''}
          />
        </Content>
      </Main>
    </>
  )
}

export default SecondaryData
