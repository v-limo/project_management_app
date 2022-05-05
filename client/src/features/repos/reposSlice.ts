

import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../app/store'
import { repoType } from '../../types/reposType'
import { fetchRepos } from './reposAsync'

type reposState = {
  repos: repoType[]
  filtered: repoType[]
  isLoading: boolean
  error: boolean
}

const initialState = {
  repos: [],
  filtered: [],
  isLoading: false,
  error: false,
} as reposState

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    sortRecent(state) {
      state.repos.sort((a, b) => {
        return (
          new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
        )
      })
    },

    sortPopular(state, action) {
      state.repos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count
      })
    },

    filterMyRepos(state, action) {
      state.repos = state.repos.filter((repo) => {
        return repo.owner.login === action.payload
      })
    },

    filterByLanguage(state, action) {
      state.repos = state.filtered
      if (action.payload !== 'All') {
        state.repos = state.repos.filter((repo) => {
          return repo?.topics?.some((topic) => {
            return topic?.toLowerCase().includes(action.payload.toLowerCase())
          })
        })
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
      state.filtered = payload
    })

    builder.addCase(fetchRepos.rejected, (state) => {
      state.isLoading = false
      state.error = true
      state.repos = []
    })
  },
})

export const { sortRecent, filterMyRepos, filterByLanguage } =
  reposSlice.actions
export const selectRepos = (state: RootState) => state.repos
// export const selectOwner = (state: RootState) => state.repos.repos[0]?.owner
export default reposSlice.reducer
