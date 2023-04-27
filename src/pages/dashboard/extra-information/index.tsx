import EditorComponent from '../editor-component'

const ExtraInformation: React.FC = () => {
  return (
    <EditorComponent
      title={'EXTRA INFORMATION'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default ExtraInformation
