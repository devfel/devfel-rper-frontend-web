import { useState, useCallback } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import Button from '../../../components/button'
import TextEditor from '../../../components/text-editor'
import { Container } from './styles'

interface TitleProp {
  title: string
}

const EditorComponent: React.FC<TitleProp> = ({ title }) => {
  const [readOnly, setReadOnly] = useState(true)

  const handleEnableEdition = useCallback(() => {
    setReadOnly(false)
  }, [])

  const updateReadOnly = (value: boolean) => {
    setReadOnly(value)
  }

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        {title}
      </h2>
      {readOnly && (
        <Button onClick={handleEnableEdition}>Enable Edition</Button>
      )}
      <TextEditor
        isReadOnly={readOnly}
        updateReadOnlyFunction={updateReadOnly}
      />
    </Container>
  )
}

export default EditorComponent
