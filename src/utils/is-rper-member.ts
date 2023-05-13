import { Rper } from '../contexts/rper-context'

export function isMember(rper: Rper | null, user_id: string) {
  return rper?.members.some(member => member.user_id === user_id)
}
