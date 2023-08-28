import { useState, useEffect } from 'react'
import { useParams, useBeforeUnload } from 'react-router-dom'
import Header from '../../../components/header'
import { useAuth } from '../../../contexts/auth-context'
import { useRper } from '../../../contexts/rper-context'
import api, { handleUploadImage } from '../../../services/api'
import { MAX_TIME_WITHOUT_EDITING } from '../../../utils/constants'
import EditorComponent from '../editor-component'
import { Main, Content } from '../styles'
import Menu from '../../../components/menu'
import { useToast } from '../../../contexts/toast-context'

const HistoricalMapping: React.FC = () => {
  const { id } = useParams()
  const { rper, findRper, findEditingResource } = useRper()
  const { user } = useAuth()
  const { addToast } = useToast()
  const [contentText, setContentText] = useState('')
  const [readOnly, setReadOnly] = useState(true)

  const handleEditingResource = async (readonly: boolean) => {
    const isEditing = await findEditingResource(`${id}`, 'historical-mapping')
    if (isEditing) {
      window.alert('Este recurso já está sendo editado')
      return
    }

    await api.post('rpers/resources', {
      rper_id: id,
      user_id: user.user_id,
      resource: 'historical-mapping',
    })

    findRper(`${id}`)

    setReadOnly(readonly)
  }

  const handleRemoveEditingResource = async () => {
    await api.delete(`rpers/resources/${id}/${user.user_id}/historical-mapping`)
  }

  const handleSave = async () => {
    try {
      await api.put(`rpers/${id}/historical-mapping`, {
        content: contentText,
      })
      await handleRemoveEditingResource()
      setReadOnly(true)
      findRper(`${id}`)
    } catch (error: any) {
      addToast({
        type: 'error',
        title: 'Saving content',
        description:
          'Oops! Something wrong happening while saving content. Please try again',
      })
      console.log(error)
    }
  }

  useEffect(() => {
    findRper(`${id}`)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      handleSave()
      findRper(`${id}`)
      setReadOnly(true)
    }, MAX_TIME_WITHOUT_EDITING)

    return () => clearInterval(timer)
  }, [contentText])

  useBeforeUnload(() => {
    handleSave()
    handleRemoveEditingResource()
    setReadOnly(true)
  })

  return (
    <>
      <Header />
      <Main>
        <h1>{rper?.name}</h1>
        <Menu />
        <Content>
          <EditorComponent
            title={'HISTORICAL MAPPING'}
            helpLink={"/help/historical-mapping"}
            handleTextChange={setContentText}
            handleSave={handleSave}
            isReadOnly={readOnly}
            handleReadOnly={handleEditingResource}
            rper={rper}
            handleUploadImage={handleUploadImage}
          />
        </Content>
      </Main>
    </>
  )
}

export default HistoricalMapping
