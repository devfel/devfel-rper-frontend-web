import { useCallback } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import Button from '../../../components/button'
import TextEditor from '../../../components/text-editor'
import { ActionButtons, Container } from './styles'
import { Rper } from '../../../contexts/rper-context'
import { isMember } from '../../../utils/is-rper-member'
import { useAuth } from '../../../contexts/auth-context'

interface TitleProp {
  title: string
  isReadOnly: boolean
  rper: Rper | null
  editable: boolean
  handleTextChange: (text: string) => void
  handleSave: () => void
  handleReadOnly: (readonly: boolean) => void
}

const EditorComponent: React.FC<TitleProp> = ({
  title,
  handleSave,
  handleTextChange,
  handleReadOnly,
  isReadOnly,
  rper,
  editable,
}) => {
  const { user } = useAuth()

  const handleEnableEdition = useCallback(() => {
    handleReadOnly(false)
  }, [])

  const updateReadOnly = (value: boolean) => {
    handleReadOnly(value)
  }

  const hasPermissionToEdit =
    rper?.coordinator_id === user.user_id || isMember(rper, user.user_id)

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        {title}
      </h2>
      <ActionButtons>
        <Button
          onClick={handleEnableEdition}
          disabled={!isReadOnly || !editable || !hasPermissionToEdit}
        >
          Enable Edition
        </Button>
        <Button
          disabled={isReadOnly || !hasPermissionToEdit}
          onClick={handleSave}
        >
          Save
        </Button>
      </ActionButtons>
      <TextEditor
        isReadOnly={isReadOnly}
        updateReadOnlyFunction={updateReadOnly}
        handleTextChange={handleTextChange}
        content={rper?.secondaryData.content || ''}
      />
    </Container>
  )
}

export default EditorComponent
