export type stageType = 'backlog' | 'todo' | 'inProgress' | 'review' | 'done'

export interface repoType {
  id: number
  name: string
  description: string
  owner: Owner
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
