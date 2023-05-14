import EditorComponent from '../editor-component'

const TasksAndCalendar: React.FC = () => {
  return (
    <EditorComponent
      title={'TASKS AND CALENDAR'}
      handleReadOnly={() => null}
      handleSave={() => null}
      handleTextChange={() => null}
      isReadOnly
      rper={null}
      editable
    />
  )
}

export default TasksAndCalendar
