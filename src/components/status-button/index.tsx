import { useCallback, useState } from 'react'
import {
  MdPanoramaFishEye,
  MdErrorOutline,
  MdLens,
  MdCancel,
} from 'react-icons/md'
import { Container, StatusList } from './styles'

const StatusButton: React.FC = () => {
  const [status, setStatus] = useState('unstarted')

  const currentStatus = useCallback(() => {
    if (status === 'inProgress') {
      return <MdErrorOutline />
    }

    if (status === 'completed') {
      return <MdLens />
    }

    if (status === 'notApplicable') {
      return <MdCancel />
    }

    return <MdPanoramaFishEye />
  }, [status])

  return (
    <Container>
      {currentStatus()}
      <StatusList>
        <li onClick={() => setStatus('inProgress')}>
          <MdErrorOutline />
          In Progress
        </li>
        <li onClick={() => setStatus('completed')}>
          <MdLens />
          Completed
        </li>
        <li onClick={() => setStatus('notApplicable')}>
          <MdCancel />
          Not Applicable
        </li>
        <li onClick={() => setStatus('unstarted')}>
          <MdPanoramaFishEye />
          Unstarted
        </li>
      </StatusList>
    </Container>
  )
}

export default StatusButton
