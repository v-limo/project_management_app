import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { repoType } from '../../types/reposType'

export const fetchRepos = createAsyncThunk('repos/fetchRepos', async () => {
  const response = await axios.get(`https://api.github.com/users/v-limo/repos`)
  const results: repoType[] = response.data
  return results
})
