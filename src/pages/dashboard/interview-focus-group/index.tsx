import EditorComponent from '../editor-component'

const InterviewFocusGroup: React.FC = () => {
  return (
    <EditorComponent
      title={'INTERVIEW & FOCUS GROUP'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default InterviewFocusGroup
