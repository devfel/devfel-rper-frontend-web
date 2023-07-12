import { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'
import { useAuth } from './auth-context'
import { RequestMessages, RequestStatus } from '../enums/AuthEnum'

export interface User {
  user_id: string
  name: string
  avatar_url: string
}

interface SecondaryData {
  content: string
}

interface Acknowledgment {
  content: string
}

interface HistoricalMapping {
  content: string
}

interface TransectWalk {
  content: string
}
        
interface FinalConsideration {
  content: string
}

export interface Rper {
  name: string
  coordinator_id: string
  rper_id: string
  secondaryData: SecondaryData
  acknowledgment: Acknowledgment
  historicalMapping: HistoricalMapping
  transectWalk: TransectWalk
  finalconsideration: FinalConsideration
  coordinator: User
  members: User[]
  background_url: string | undefined
  created_at: string
  updated_at: string
}

interface EditingResource {
  rper_id: string
  user_id: string
  resource: string
}

interface RperContextData {
  rpers: Rper[] | null
  rper: Rper | null
  getRpers: () => Promise<void>
  findRper: (rper_id: string) => Promise<void>
  findEditingResource: (
    rper_id: string,
    resource: string,
  ) => Promise<EditingResource>
}

const RperContext = createContext({} as RperContextData)

const RperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rpers, setRpers] = useState<Rper[] | null>(null)
  const [rper, setRper] = useState<Rper | null>(null)
  const { logOut } = useAuth()

  const getRpers = useCallback(async () => {
    try {
      const response = await api.get('rpers')
      setRpers(response.data)
    } catch (error: any) {
      console.log(error)
      if (
        error.response.status === RequestStatus.UNAUTHORIZED &&
        error.response.data.message === RequestMessages.INVALID_TOKEN
      ) {
        logOut()
      }
    }
  }, [setRpers])

  const findRper = useCallback(
    async (rper_id: string) => {
      try {
        const response = await api.get<Rper>(`rpers/${rper_id}`)
        setRper(response.data)
      } catch (error: any) {
        console.log(error)
        if (
          error.response.status === RequestStatus.UNAUTHORIZED &&
          error.response.data.message === RequestMessages.INVALID_TOKEN
        ) {
          logOut()
        }
      }
    },
    [setRper],
  )

  const findEditingResource = useCallback(
    async (rper_id: string, resource: string) => {
      try {
        const response = await api.get(
          `/rpers/resources/${rper_id}/${resource}`,
        )
        return response.data
      } catch (error: any) {
        console.log(error)
        if (
          error.response.status === RequestStatus.UNAUTHORIZED &&
          error.response.data.message === RequestMessages.INVALID_TOKEN
        ) {
          logOut()
        }
      }
    },
    [],
  )

  return (
    <RperContext.Provider
      value={{
        rpers,
        rper,
        getRpers,
        findRper,
        findEditingResource,
      }}
    >
      {children}
    </RperContext.Provider>
  )
}

function useRper(): RperContextData {
  const context = useContext(RperContext)

  if (!context) {
    throw new Error('useRper must be used within a RperProvider')
  }

  return context
}

export { RperProvider, useRper }
