import EditorComponent from '../editor-component'

const ElectionOfPriorities: React.FC = () => {
  return (
    <EditorComponent
      title={'ELECTION OF PRIORITIES'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default ElectionOfPriorities
