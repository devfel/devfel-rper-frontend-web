import EditorComponent from '../editor-component'

const InterviewGuide: React.FC = () => {
  return (
    <EditorComponent
      title={'INTERVIEW GUIDE'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      rper={null}
      editable
    />
  )
}

export default InterviewGuide
