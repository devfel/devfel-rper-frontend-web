import { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

export interface User {
  user_id: string
  name: string
  avatar_url: string
}

interface SecondaryData {
  content: string
}

export interface Rper {
  name: string
  coordinator_id: string
  rper_id: string
  secondaryData: SecondaryData
  coordinator: User
  members: User[]
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
  editingResource: EditingResource | null
  getRpers: () => Promise<void>
  findRper: (rper_id: string) => Promise<void>
  findEditingResource: (rper_id: string, resource: string) => Promise<void>
}

const RperContext = createContext({} as RperContextData)

const RperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rpers, setRpers] = useState<Rper[] | null>(null)
  const [rper, setRper] = useState<Rper | null>(null)
  const [editingResource, setEditingResource] =
    useState<EditingResource | null>(null)

  const getRpers = useCallback(async () => {
    try {
      const response = await api.get('rpers')
      setRpers(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [setRpers])

  const findRper = useCallback(
    async (rper_id: string) => {
      try {
        const response = await api.get<Rper>(`rpers/${rper_id}`)
        setRper(response.data)
      } catch (error) {
        console.log(error)
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
        setEditingResource(response.data)
      } catch (error) {
        console.log(error)
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
        editingResource,
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
