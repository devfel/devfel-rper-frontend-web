import EditorComponent from '../editor-component'

const ElectionOfPriorities: React.FC = () => {
  return (
    <EditorComponent
      title={'ELECTION OF PRIORITIES'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      rper={null}
      editable
    />
  )
}

export default ElectionOfPriorities
