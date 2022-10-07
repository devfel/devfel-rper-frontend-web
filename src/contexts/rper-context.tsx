import { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface Rper {
  name: string
  coordinator_id: string
  rper_id: string
  created_at: string
  updated_at: string
}

interface RperContextData {
  rpers: Rper[] | null
  getRpers: () => Promise<void>
}

const RperContext = createContext({} as RperContextData)

const RperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rpers, setRpers] = useState<Rper[] | null>(null)

  const getRpers = useCallback(async () => {
    try {
      const response = await api.get('rpers')
      setRpers(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [setRpers])

  return (
    <RperContext.Provider value={{ rpers, getRpers }}>
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
