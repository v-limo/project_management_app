import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { repoType } from '../../types/reposType'
import { fetchRepos } from './reposAsync'

type reposState = {
  repos: repoType[]
  isLoading: boolean
  error: boolean
}

const initialState = {
  repos: [],
  isLoading: false,
  error: false,
} as reposState

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    addRandomStage(state) {
      const stages = [
        'PLANNING',
        'ANALYZING',
        'DESIGNING',
        'DEVELOPMENT',
        'TESTING',
        'RELEASE',
        'DONE',
        'CANCELLED',
        'FAILED',
      ] as any[
        | 'PLANNING'
        | 'ANALYZING'
        | 'DESIGNING'
        | 'DEVELOPMENT'
        | 'TESTING'
        | 'RELEASE'
        | 'DONE'
        | 'CANCELLED'
        | 'FAILED']

      state.repos.forEach((repo) => {
        // add random future dates and stage to projects
        const randomStage = stages[Math.floor(Math.random() * stages.length)]
        const randomDate = new Date()
        randomDate.setDate(
          randomDate.getDate() + Math.floor(Math.random() * 30)
        )
        repo.date_line = new Date(randomDate).toLocaleDateString()
        repo.stage = randomStage
      })
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
    })

    builder.addCase(fetchRepos.rejected, (state) => {
      state.isLoading = false
      state.error = true
      state.repos = []
    })
  },
})

export const { addRandomStage } = reposSlice.actions
export const selectRepos = (state: RootState) => state.repos
export default reposSlice.reducer
