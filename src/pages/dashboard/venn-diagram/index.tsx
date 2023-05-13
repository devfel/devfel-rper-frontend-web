import EditorComponent from '../editor-component'

const VennDiagram: React.FC = () => {
  return (
    <EditorComponent
      title={'VENN DIAGRAM'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      rper={null}
      editable
    />
  )
}

export default VennDiagram
