import EditorComponent from '../editor-component'

const ThemesFramework: React.FC = () => {
  return (
    <EditorComponent
      title={'THEMES FRAMEWORK'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default ThemesFramework
