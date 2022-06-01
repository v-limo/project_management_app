import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { changeStagePayload, repoType, stageType } from '../../types/reposType'
import { fetchRepos } from './reposAsync'

type reposState = {
  repos: repoType[]
  isLoading: boolean
  error: boolean
  message: string
}

const initialState = {
  repos: [],
  isLoading: false,
  error: false,
  message: '',
} as reposState

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    addRandomStage(state) {
      const stages = ['backlog', 'todo', 'inProgress', 'review', 'done']

      state.repos.forEach((repo) => {
        const randomStage = stages[
          Math.floor(Math.random() * stages.length)
        ] as stageType

        repo.stage = randomStage
        repo.dead_line = new Date(
          new Date().getTime() +
            Math.floor(Math.random() * 15) * 24 * 60 * 60 * 1000 -
            Math.floor(Math.random() * 13) * 24 * 60 * 60 * 1000
        ).toLocaleDateString()
      })
    },

    AddTask(state, action: { payload: repoType }) {
      state.repos.push(action.payload)
      state.message = 'Task added successfully.'
    },

    RemoveTask(state, action: { payload: repoType }) {
      const index = state.repos.indexOf(action.payload)
      state.repos.splice(index, 1)
      state.isLoading = false
      state.error = false
      state.message = ''
    },

    changeStage(state, action: { payload: changeStagePayload }) {
      const { payload } = action
      const { destination, draggableId, source } = payload
      let repo = state.repos.find((repo) => repo.name === draggableId)

      let destinationrepos = state.repos.filter(
        (repo) => repo.stage === destination.droppableId
      )

      if (!repo) {
        return
      }

      if (source.droppableId === destination.droppableId) {
        //remove repo from the destination array
        destinationrepos = destinationrepos.filter(
          (repo) => repo.name !== draggableId
        )
        //add repo to the destination array at the new index
        destinationrepos.splice(destination.index, 0, repo)
        //set the new state
        state.repos = [
          ...destinationrepos,
          ...state.repos.filter((repo) => repo.stage !== source.droppableId),
        ]
      } else {
        repo.stage = destination.droppableId as stageType

        // set dateline to 15 destination days from no
        repo.dead_line = new Date(
          new Date().getTime() + 15 * 24 * 60 * 60 * 1000
        ).toLocaleDateString()

        destinationrepos.splice(destination.index, 0, repo)

        //set the new state
        state.repos = [
          ...destinationrepos,
          ...state.repos.filter(
            (repo) => repo.stage !== destination.droppableId
          ),
        ]
      }
    },
  },

  extraReducers: (builder) => {
    //fetchRepos
    builder.addCase(fetchRepos.pending, (state) => {
      state.isLoading = true
      state.error = false
    })

    builder.addCase(fetchRepos.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.repos = payload
      state.message = 'Repos fetched successfully'
    })

    builder.addCase(fetchRepos.rejected, (state) => {
      state.isLoading = false
      state.error = true
      state.repos = []
    })
  },
})

export const { addRandomStage, AddTask, RemoveTask, changeStage } =
  reposSlice.actions
export const selectRepos = (state: RootState) => state.repos
export default reposSlice.reducer
