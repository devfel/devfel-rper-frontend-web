import EditorComponent from '../editor-component'

const SeasonalCalendar: React.FC = () => {
  return (
    <EditorComponent
      title={'SEASONAL CALENDAR'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default SeasonalCalendar
