export type stageType = 'backlog' | 'todo' | 'inProgress' | 'review' | 'done'

export interface repoType {
  name: string
  full_name: string
  owner: Owner
  html_url: string
  languages_url: string
  language: string
  topics: string[]
  stage?: stageType
  dead_line?: string
}

export interface Owner {
  login: string
  avatar_url: string
}

export interface changeStagePayload {
  draggableId: string
  destination: {
    droppableId: string
    index: number
  }
  source: {
    droppableId: string
    index: number
  }
}
