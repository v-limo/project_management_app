import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
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
        borderTop: '1rem solid #e7ecf0',
        boxShadow: '0px 0px 10px rgba(99, 94, 94, 0.4)',
        mt: '-2rem',
        minHeight: '50vh',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1,
        border: '0.2px solid #e0e0e0',
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
          overflow: 'hidden',
          textOverflow: 'ellipsis',
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

      <Droppable droppableId={stage}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '1rem',
            }}
          >
            {reposByStage &&
              reposByStage?.length > 0 &&
              reposByStage.map((repo, index) => (
                <Repo
                  repo={repo}
                  key={`${repo.full_name}-${repo.stage}-${index}`}
                  index={index}
                />
              ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  )
}
export default Stage
