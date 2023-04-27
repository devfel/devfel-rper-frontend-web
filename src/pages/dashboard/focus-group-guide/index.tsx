import EditorComponent from '../editor-component'

const FocusGroupGuide: React.FC = () => {
  return (
    <EditorComponent
      title={'FOCUS GROUP GUIDE'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default FocusGroupGuide
