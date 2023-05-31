import { useEffect, useRef } from 'react'
import SunEditor from 'suneditor-react'
import SunEditorCore from 'suneditor/src/lib/core'
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import { Container } from './styles'

interface TextEditorProps {
  isReadOnly: boolean
  content: string
  handleTextChange: (value: any) => void
  handleUploadImage: (files: any, info: any, uploadHandler: any) => void
}

const TextEditor = ({
  isReadOnly,
  handleTextChange,
  content,
  handleUploadImage,
}: TextEditorProps) => {
  const editor = useRef<SunEditorCore>()

  useEffect(() => {
    editor.current?.readOnly(isReadOnly)
    editor.current?.setContents(content)
  }, [isReadOnly, content])

  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor
  }

  return (
    <Container>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        height="100vh"
        setOptions={{
          plugins: { ...plugins },
          buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['bold', 'underline', 'italic', 'strike'],
            ['subscript', 'superscript'],
            ['fontColor', 'hiliteColor', 'textStyle'],
            ['removeFormat'],
            ['outdent', 'indent', 'align', 'lineHeight'],
            ['horizontalRule', 'list', 'table'],
            ['link', 'image'],
            ['fullScreen', 'preview', 'print'],
          ],
          formats: ['h1', 'h2', 'h3', 'p', 'div', 'blockquote', 'pre'],
        }}
        onChange={handleTextChange}
        onImageUploadBefore={handleUploadImage}
      />
    </Container>
  )
}

export default TextEditor
