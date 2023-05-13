import EditorComponent from '../editor-component'

const DailyRoutines: React.FC = () => {
  return (
    <EditorComponent
      title={'DAILY ROUTINES'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      rper={null}
      editable
    />
  )
}

export default DailyRoutines
