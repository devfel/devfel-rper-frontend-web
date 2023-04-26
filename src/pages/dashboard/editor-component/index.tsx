import { useCallback } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import Button from '../../../components/button'
import TextEditor from '../../../components/text-editor'
import { ActionButtons, Container } from './styles'

interface TitleProp {
  title: string
  handleTextChange: (text: string) => void
  handleSave: () => void
  isReadOnly: boolean
  handleReadOnly: (readonly: boolean) => void
  content: string
}

const EditorComponent: React.FC<TitleProp> = ({
  title,
  handleSave,
  handleTextChange,
  handleReadOnly,
  isReadOnly,
  content,
}) => {
  const handleEnableEdition = useCallback(() => {
    handleReadOnly(false)
  }, [])

  const updateReadOnly = (value: boolean) => {
    handleReadOnly(value)
  }

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        {title}
      </h2>
      <ActionButtons>
        <Button onClick={handleEnableEdition} disabled={!isReadOnly}>
          Enable Edition
        </Button>
        <Button disabled={isReadOnly} onClick={handleSave}>
          Salvar
        </Button>
      </ActionButtons>
      <TextEditor
        isReadOnly={isReadOnly}
        updateReadOnlyFunction={updateReadOnly}
        handleTextChange={handleTextChange}
        content={content}
      />
    </Container>
  )
}

export default EditorComponent
