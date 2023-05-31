import EditorComponent from '../editor-component'

const Presentation: React.FC = () => {
  return (
    <EditorComponent
      title={'PRESENTATION'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      rper={null}
      handleUploadImage={() => null}
    />
  )
}

export default Presentation
