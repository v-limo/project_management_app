import React from 'react'
import { useSelector } from 'react-redux'

import { Box } from '@mui/material'

import { selectRepos } from '../features/repos/reposSlice'
import { Repos } from './Repos'

const Projects = () => {
  const { repos } = useSelector(selectRepos)
  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {repos && repos.length > 0 && <Repos repos={repos} />}
      </Box>
    </Box>
  )
}
export default Projects
