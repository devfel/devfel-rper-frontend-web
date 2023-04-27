import EditorComponent from '../editor-component'

const InputAndOutput: React.FC = () => {
  return (
    <EditorComponent
      title={'INPUT AND OUTPUT'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default InputAndOutput
