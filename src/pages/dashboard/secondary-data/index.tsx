import { useEffect, useState } from 'react'
import Header from '../../../components/header'
import Menu from '../../../components/menu'
import EditorComponent from '../editor-component'
import { Content, Main } from '../styles'
import { useParams } from 'react-router-dom'
import api from '../../../services/api'
import { useRper } from '../../../contexts/rper-context'
import { useAuth } from '../../../contexts/auth-context'

const SecondaryData: React.FC = () => {
  const { id } = useParams()
  const { rper, findRper, editingResource, findEditingResource } = useRper()
  const { user } = useAuth()
  const [contentText, setContentText] = useState('')
  const [readOnly, setReadOnly] = useState(true)

  const handleEditingResource = async (readonly: boolean) => {
    if (editingResource) {
      window.alert('Este recurso já está sendo editado')
      return
    }

    await api.post('rpers/resources', {
      rper_id: rper?.rper_id,
      user_id: user.user_id,
      resource: 'secondary-data',
    })

    setReadOnly(readonly)
  }

  const handleSave = async () => {
    try {
      await api.put(`rpers/${id}/secondary-data`, {
        content: contentText,
        editable: !readOnly,
      })
      await api.delete(
        `rpers/resources/${rper?.rper_id}/${user.user_id}/secondary-data`,
      )
      setReadOnly(true)
      findRper(`${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findRper(`${id}`)
    findEditingResource(`${id}`, 'secondary-data')
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
            handleReadOnly={handleEditingResource}
            rper={rper}
          />
        </Content>
      </Main>
    </>
  )
}

export default SecondaryData
