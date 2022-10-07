import { ToastMessage } from '../../contexts/toast-context'
import Toast from './toast'
import { Container } from './styles'

import { useTransition } from 'react-spring'

interface ToastContainerProps {
  messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { transform: 'translateX(+120%)', opacity: 0 },
    enter: { transform: 'translateX(0%)', opacity: 1 },
    leave: { transform: 'translateX(+120%)', opacity: 0 },
  })
  return (
    <Container>
      {messagesWithTransitions((styles, item) => (
        <Toast key={item.id} message={item} style={styles} />
      ))}
    </Container>
  )
}

export default ToastContainer
