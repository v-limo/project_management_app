import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Box, Card, CardContent, Chip, Divider, Typography } from '@mui/material'

import { repoType } from '../types/reposType'

type repoProps = {
  repo: repoType
  index: number
}

function Repo({ repo, index }: repoProps) {
  const { name, full_name, date_line, language, topics } = repo

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
              gutterBottom
              sx={{
                color: '#2d79c7',
                fontWeight: 'bold',
                fontSize: '1rem',
                textDecoration: 'underline',
              }}
            >
              {name.replaceAll('_', ' ').replaceAll('-', ' ').toUpperCase()}
            </Typography>
            <Typography variant='body1' gutterBottom>
              {full_name} - {language?.length && `#${language}`}
            </Typography>
            <Divider
              sx={{
                width: '60%',
                height: '1px',
                backgroundColor: '#e7ecf0',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                mt: '0.8rem',
                alignItems: 'center',
                flexWrap: 'wrap',
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

                      borderRadius: '0.5rem',
                      margin: '0.2rem',
                      '&:hover': {
                        color: '#fafafa',
                        backgroundColor: '#5b748d',
                        border: '1px solid ##5b748d',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        transitionDelay: '0.1s',
                      },
                    }}
                  />
                ))}
            </Box>
            <Typography
              variant='body1'
              sx={{
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: '#2d79c7',
                textAlign: 'center',
                textDecoration: 'italic',
                mt: '0.8rem',
              }}
              gutterBottom
            >
              Date line: {date_line}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  )
}

export default Repo
