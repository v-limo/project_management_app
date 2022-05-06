import React from 'react'

import CodeIcon from '@mui/icons-material/Code'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from '@mui/material'

import { repoType } from '../types/reposType'

type repoProps = {
  repo: repoType
}

function Repo({ repo }: repoProps) {
  const { name, description, full_name, language, topics, date_line } = repo

  const pastDateLine = (dateline: string) => {
    const today = new Date()
    const dateLine = new Date(dateline)
    const diff = dateLine.getTime() - today.getTime()

    if (diff < 0) {
      return true
    } else {
      return false
    }
  }

  date_line && console.log(pastDateLine(date_line))

  return (
    <Card
      sx={{
        width: '100%',
        my: '4px',
        cursor: 'pointer',
        height: 'fit-content',
        border: '0.2px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa',
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
            backgroundColor: '#e0e0e0',
          }}
        />
        <Typography variant='body1' gutterBottom>
          {description?.length > 0 && description.length > 40
            ? description.substring(0, 40).concat(' ...')
            : description}
        </Typography>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
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
                sx={{ mx: '1px', fontSize: '0.8rem' }}
              />
            ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default Repo
