import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'

import { repoType } from '../types/reposType'

type repoProps = {
  repo: repoType
  index: number
}

function Repo({ repo, index }: repoProps) {
  const { name, dead_line, description, owner } = repo

  const pastDateLine = dead_line
    ? new Date(dead_line).getTime() < new Date().getTime()
      ? true
      : false
    : false

  return (
    <Draggable draggableId={name} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            width: '100%',
            my: '4px',
            height: 'fit-content',
            border: '0.2px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '0.5rem',
            '&:hover': {
              boxShadow: 4,
              transition: 'box-shadow 0.3s ease-in-out',
            },
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'start',
              flexGrow: 1,
            }}
          >
            <Typography
              variant='body1'
              sx={{
                color: '#2d79c7',
                fontWeight: 'bold',
                fontSize: '14px',
                textDecoration: 'underline',
              }}
            >
              {name.replaceAll('_', ' ').replaceAll('-', ' ')}
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '12px',
              }}
            >
              {description && description?.length < 120
                ? description
                : description?.slice(0, 120) + '...'}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                mt: '0.5rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Avatar
                alt='Avatar'
                src={owner?.avatar_url}
                sx={{
                  width: 30,
                  height: 30,
                }}
              />
              <Typography
                variant='body1'
                sx={{
                  padding: "2px",
                  fontSize: '12px',
                  border: '1px solid #ffffff',
                  borderRadius: '0.3rem',
                  bgcolor: pastDateLine ? '#a83a3ac5' : '#397838',
                }}
              >
                deadline: {dead_line}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Draggable>
  )
}

export default Repo
