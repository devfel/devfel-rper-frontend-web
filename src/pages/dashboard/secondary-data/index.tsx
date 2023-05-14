import { useEffect, useState } from 'react'
import Header from '../../../components/header'
import Menu from '../../../components/menu'
import EditorComponent from '../editor-component'
import { Content, Main } from '../styles'
import { useParams } from 'react-router-dom'
import api from '../../../services/api'
import { useRper } from '../../../contexts/rper-context'

const SecondaryData: React.FC = () => {
  const { id } = useParams()
  const { rper, findRper } = useRper()
  const [contentText, setContentText] = useState('')
  const [readOnly, setReadOnly] = useState(true)

  const handleSave = async () => {
    try {
      await api.put(`rpers/${id}/secondary-data`, {
        content: contentText,
        editable: !readOnly,
      })
      findRper(`${id}`)

      setReadOnly(!rper?.secondaryData.editable)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateRperEditable = async (editable: boolean) => {
    try {
      await api.put(`rpers/${id}/secondary-data`, {
        editable,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findRper(`${id}`)

    if (rper?.secondaryData.editable === true) {
      handleUpdateRperEditable(!rper?.secondaryData.editable)
    }

    setReadOnly(!rper?.secondaryData.editable)
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
            rper={rper}
            editable={!!rper?.secondaryData.editable}
          />
        </Content>
      </Main>
    </>
  )
}

export default SecondaryData
