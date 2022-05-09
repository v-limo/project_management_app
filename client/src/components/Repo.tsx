import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
  Avatar,
} from '@mui/material'

import { repoType } from '../types/reposType'

type repoProps = {
  repo: repoType
  index: number
}

function Repo({ repo, index }: repoProps) {
  const { name, full_name, date_line, language, topics, owner } = repo

  const pastDateLine = date_line
    ? new Date(date_line).getTime() < new Date().getTime()
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
              variant='h6'
              sx={{
                color: '#2d79c7',
                fontWeight: 'bold',
                fontSize: '1rem',
                textDecoration: 'underline',
              }}
            >
              {name.replaceAll('_', ' ').replaceAll('-', ' ').toUpperCase()}
            </Typography>
            <Typography variant='body1'>
              {full_name} - {language?.length && `#${language}`}
            </Typography>
            <Divider
              sx={{
                my: '0.2rem',
                width: '60%',
                backgroundColor: '#e7ecf0',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                mt: '0.2rem',
                maxWidth: '100%',
                flexWrap: 'wrap',
                borderRadius: '0.5rem',
              }}
            >
              {topics?.length > 0 &&
                topics.map((topic, index) => (
                  <Chip
                    key={index}
                    label={`#${topic}`}
                    size='small'
                    clickable
                    sx={{
                      m: '1px',
                    }}
                  />
                ))}
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                mt: '0.8rem',
                alignItems: 'center',
                width: '80%',
              }}
            >
              <Avatar
                alt='Avatar'
                src={owner?.avatar_url}
                sx={{
                  width: 40,
                  height: 40,
                }}
              />
              <Typography
                variant='body1'
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: '0.25rem',
                  borderRadius: '0.1rem',
                  textDecoration: 'italic',
                  bgcolor: pastDateLine ? '#a83a3ac5' : '#397838',
                }}
              >
                DateLine: {date_line}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Draggable>
  )
}

export default Repo
