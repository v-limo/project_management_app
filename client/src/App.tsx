import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Paper, ThemeProvider } from '@mui/material'

import { selectDarkmode } from './features/darkMode/darkModeSlice'
import { fetchRepos } from './features/repos/reposAsync'
import { filterMyRepos, selectRepos, sortRecent } from './features/repos/reposSlice'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import Layout from './pages/Layout'
import NoMatch from './pages/NoMatch'
import Policy from './pages/Policy'
import Portfolio from './pages/Portfolio'
import { darkTheme, lightTheme } from './theme'

const App = () => {
  let { darkMode: mode } = useSelector(selectDarkmode)
  let { repos } = useSelector(selectRepos)
  const theme = mode ? darkTheme : lightTheme

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRepos())
  }, [dispatch])

  useEffect(() => {
    if (repos?.length > 0) {
      dispatch(sortRecent())
    }
  }, [dispatch, repos?.length])

  useEffect(() => {
    if (repos?.length > 0) {
      dispatch(filterMyRepos('v-limo'))
    }
  }, [dispatch, repos?.length])

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: '100vh' }}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='policy' element={<Policy />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  )
}

export default App
