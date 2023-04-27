import EditorComponent from '../editor-component'

const TransectWalk: React.FC = () => {
  return (
    <EditorComponent
      title={'TRANSECT WALK'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default TransectWalk
