import EditorComponent from '../editor-component'

const Presentation: React.FC = () => {
  return (
    <EditorComponent
      title={'PRESENTATION'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default Presentation
