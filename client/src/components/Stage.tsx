import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Typography } from '@mui/material'

import { selectRepos } from '../features/repos/reposSlice'
import Repo from './Repo'

type Props = {
  stage: string
}
const Stage = ({ stage }: Props) => {
  const { repos } = useSelector(selectRepos)
  let reposByStage = repos.filter((repo) => repo?.stage === stage)

  return (
    <Box
      sx={{
        mx: 'auto',
        width: '100%',
      }}
    >
      <Typography variant='h4' gutterBottom>
        {stage}
      </Typography>
      {reposByStage &&
        reposByStage?.length > 0 &&
        reposByStage.map((repo) => (
          // <Repo repo={repo} key={repo.clone_url} />
          <Typography variant='h4' gutterBottom>
            {repo?.name ?? 'No name'}
          </Typography>
        ))}
    </Box>
  )
}
export default Stage
