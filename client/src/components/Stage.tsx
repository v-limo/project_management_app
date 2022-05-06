import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Divider, Typography } from '@mui/material'

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
        flex: 1,
        width: '100%',
        mx: '1rem',
        borderRadius: '0.5rem',
        borderTop: '10px solid black',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
        mt: '-2rem',
        zIndex: 1,
        
      }}
    >
      <Typography
        variant='h4'
        sx={{
          fontFamily: 'heading',
          textAlign: 'center',
          marginTop: '1rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
        gutterBottom
      >
        {stage}
      </Typography>

      <Divider
        sx={{
          width: '100%',
          height: '1px',
          backgroundColor: '#e7ecf0',
          margin: '1rem 0',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '1rem',
        }}
      >
        {reposByStage &&
          reposByStage?.length > 0 &&
          reposByStage.map((repo) => (
            <Repo repo={repo} key={repo.clone_url} />
            // <Typography variant='h4' gutterBottom>
            //   {repo?.name ?? 'No name'}
            // </Typography>
          ))}
      </Box>
    </Box>
  )
}
export default Stage
