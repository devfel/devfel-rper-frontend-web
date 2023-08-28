import { useCallback } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import Button from '../../../components/button'
import TextEditor from '../../../components/text-editor'
import { ActionButtons, Container } from './styles'
import { Rper } from '../../../contexts/rper-context'
import { isMember } from '../../../utils/is-rper-member'
import { useAuth } from '../../../contexts/auth-context'
import { FaQuestionCircle } from 'react-icons/fa';

interface TitleProp {
  title: string
  helpLink?: string;
  isReadOnly: boolean
  rper: Rper | null
  handleTextChange: (text: string) => void
  handleSave: () => void
  handleReadOnly: (readonly: boolean) => void
  handleUploadImage: (files: any, info: any, uploadHandler: any) => void
}

const EditorComponent: React.FC<TitleProp> = ({
  title,
  helpLink,
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

    if (title === 'THEMES FRAMEWORK') {
      return rper?.themesframework.content as string
    }

    if (title === 'OTHER PREPARATION') {
      return rper?.otherpreparation.content as string
    }

    if (title === 'INTERVIEWS') {
      return rper?.interviews.content as string
    }

    if (title === 'PRESENTATION') {
      return rper?.presentation.content as string
    }

    if (title === 'VENN DIAGRAM') {
      return rper?.venndiagram.content as string
    }

    if (title === 'SEASONAL CALENDAR') {
      return rper?.seasonalcalendar.content as string
    }

    if (title === 'DAILY ROUTINE') {
      return rper?.dailyroutine.content as string
    }

    if (title === 'INPUT AND OUTPUT') {
      return rper?.inputandoutput.content as string
    }

    if (title === 'CONSTRUCTION') {
      return rper?.construction.content as string
    }

    if (title === 'FOCUS GROUP') {
      return rper?.focusgroup.content as string
    }

    if (title === 'REALITY AND OBJ. MATRIX') {
      return rper?.realityandobjmatrix.content as string
    }

    if (title === 'PRIORITIES ELECTION') {
      return rper?.prioritieselection.content as string
    }

    if (title === 'OTHER FIELDWORK') {
      return rper?.otherfieldwork.content as string
    }

    if (title === 'EXTRA INFORMATION') {
      return rper?.extrainformation.content as string
    }

    return ''
  }

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        {title}
        {helpLink && (
          <span className="help-icon">
            <a href={helpLink} target="_blank" rel="noopener noreferrer">
              <FaQuestionCircle size={30} />
            </a>
          </span>
        )}
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
