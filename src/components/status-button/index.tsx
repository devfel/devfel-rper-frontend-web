import { useCallback, useEffect, useState } from 'react'
import {
  MdPanoramaFishEye,
  MdErrorOutline,
  MdLens,
  MdCancel,
} from 'react-icons/md'
import { Container, StatusList } from './styles'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { useRper } from '../../contexts/rper-context'

interface StatusButtonProps {
  page: string
}

const StatusButton: React.FC<StatusButtonProps> = ({ page }) => {
  const [status, setStatus] = useState('unstarted')
  const { id } = useParams()
  const { findRper } = useRper()

  useEffect(() => {
    const getRperSectionStatus = async () => {
      const rperSectionStatus = await api.get(`/rpers/${id}/${page}/status`)
      const status = rperSectionStatus.data.status

      setStatus(status)
    }
    try {
      getRperSectionStatus()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleUpdateStatus = async (status: string) => {
    try {
      await api.patch(`/rpers/${id}/${page}/status`, {
        new_status: status,
      })
      setStatus(status)
      findRper(`${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  const currentStatus = useCallback(() => {
    if (status === 'in_progress') {
      return <MdErrorOutline />
    }

    if (status === 'completed') {
      return <MdLens />
    }

    if (status === 'not_applicable') {
      return <MdCancel />
    }

    return <MdPanoramaFishEye />
  }, [status])

  return (
    <Container>
      {currentStatus()}
      <StatusList>
        <li onClick={() => handleUpdateStatus('in_progress')}>
          <MdErrorOutline />
          In Progress
        </li>
        <li onClick={() => handleUpdateStatus('completed')}>
          <MdLens />
          Completed
        </li>
        <li onClick={() => handleUpdateStatus('not_applicable')}>
          <MdCancel />
          Not Applicable
        </li>
        <li onClick={() => handleUpdateStatus('unstarted')}>
          <MdPanoramaFishEye />
          Unstarted
        </li>
      </StatusList>
    </Container>
  )
}

export default StatusButton
