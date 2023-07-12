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
  handleTextChange: (text: string) => void
  handleSave: () => void
  handleReadOnly: (readonly: boolean) => void
  handleUploadImage: (files: any, info: any, uploadHandler: any) => void
}

const EditorComponent: React.FC<TitleProp> = ({
  title,
  handleSave,
  handleTextChange,
  handleReadOnly,
  isReadOnly,
  rper,
  handleUploadImage,
}) => {
  const { user } = useAuth()

  const handleEnableEdition = useCallback(() => {
    handleReadOnly(false)
  }, [])

  const hasPermissionToEdit =
    rper?.coordinator_id === user.user_id || isMember(rper, user.user_id)

  const renderContent = () => {
    if (title === 'SECONDARY DATA') {
      return rper?.secondaryData.content as string
    }

    if (title === 'ACKNOWLEDGMENT') {
      return rper?.acknowledgment.content as string
    }


    if (title === 'HISTORICAL MAPPING') {
      return rper?.historicalMapping.content as string
    }
    
    if (title === 'FINAL CONSIDERATIONS') {
      return rper?.finalconsideration.content as string
    }

    if (title === 'TRANSECT WALK') {
      return rper?.transectWalk.content as string
    }

    return ''
  }

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        {title}
      </h2>
      <ActionButtons>
        <Button
          onClick={handleEnableEdition}
          disabled={!isReadOnly || !hasPermissionToEdit}
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
        handleTextChange={handleTextChange}
        content={renderContent()}
        handleUploadImage={handleUploadImage}
      />
    </Container>
  )
}

export default EditorComponent
