import EditorComponent from '../editor-component'

const Acknowledgment: React.FC = () => {
  return (
    <EditorComponent
      title={'ACKNOWLEDGMENT'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default Acknowledgment
