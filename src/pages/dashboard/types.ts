export type User = {
  user_id: string
  name: string
  avatar_url: string
}

type SecondaryData = {
  content: string
}

export type Rper = {
  name: string
  coordinator_id: string
  coordinator: User
  rper_id: string
  members: User[]
  secondaryData: SecondaryData
  created_at: string
  updated_at: string
}
