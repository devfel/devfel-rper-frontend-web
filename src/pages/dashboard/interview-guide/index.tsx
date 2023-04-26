import EditorComponent from '../editor-component'

const InterviewGuide: React.FC = () => {
  return (
    <EditorComponent
      title={'INTERVIEW GUIDE'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default InterviewGuide
