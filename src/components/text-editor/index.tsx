import { useEffect, useRef } from 'react'
import SunEditor from 'suneditor-react'
import SunEditorCore, { Core } from 'suneditor/src/lib/core'
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import { Container } from './styles'

interface TextEditorProps {
  isReadOnly: boolean
  updateReadOnlyFunction: (value: boolean) => void
}

const TextEditor = ({
  isReadOnly,
  updateReadOnlyFunction,
}: TextEditorProps) => {
  const editor = useRef<SunEditorCore>()

  useEffect(() => {
    editor.current?.readOnly(isReadOnly)
  }, [isReadOnly])

  const saveToDB = {
    name: 'saveToDB',
    display: 'command',
    title: 'save',
    innerHTML:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
    buttonClass: '',

    add: function (core: Core, targetElement: HTMLButtonElement) {
      const context = core.context
      const rangeTag = core.util.createElement('div')
      core.util.addClass(rangeTag, '__se__format__range_custom')

      context.customCommand = {
        targetButton: targetElement,
        tag: rangeTag,
      }
    },

    action: function () {
      console.log(editor.current?.core.getContents(true))
      updateReadOnlyFunction(true)
    },
  }

  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor
  }

  return (
    <Container>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        defaultValue={''}
        height="100vh"
        setOptions={{
          plugins: { ...{ saveToDB }, ...plugins },
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
            ['fullScreen', 'preview', 'print', 'saveToDB'],
          ],
          formats: ['h1', 'h2', 'h3', 'p', 'div', 'blockquote', 'pre'],
        }}
      />
    </Container>
  )
}

export default TextEditor
