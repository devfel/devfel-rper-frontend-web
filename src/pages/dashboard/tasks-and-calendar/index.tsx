import EditorComponent from '../editor-component'

const TasksAndCalendar: React.FC = () => {
  return (
    <EditorComponent
      title={'TASKS AND CALENDAR'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      content=""
    />
  )
}

export default TasksAndCalendar
