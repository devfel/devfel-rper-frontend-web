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

const TransectWalk: React.FC = () => {
  const { id } = useParams()
  const { rper, findRper, findEditingResource } = useRper()
  const { user } = useAuth()
  const [contentText, setContentText] = useState('')
  const [readOnly, setReadOnly] = useState(true)

  const handleEditingResource = async (readonly: boolean) => {
    const isEditing = await findEditingResource(`${id}`, 'transect-walk')
    if (isEditing) {
      window.alert('Este recurso já está sendo editado')
      return
    }

    await api.post('rpers/resources', {
      rper_id: id,
      user_id: user.user_id,
      resource: 'transect-walk',
    })

    findRper(`${id}`)

    setReadOnly(readonly)
  }

  const handleRemoveEditingResource = async () => {
    await api.delete(`rpers/resources/${id}/${user.user_id}/transect-walk`)
  }

  const handleSave = async () => {
    try {
      await api.put(`rpers/${id}/transect-walk`, {
        content: contentText,
      })
      await handleRemoveEditingResource()
      setReadOnly(true)
      findRper(`${id}`)
    } catch (error) {
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
            title={'TRANSECT WALK'}
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

export default TransectWalk
