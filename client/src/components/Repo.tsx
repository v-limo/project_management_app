import React from 'react'

import CodeIcon from '@mui/icons-material/Code'
import {
    Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Typography
} from '@mui/material'

import { repoType } from '../types/reposType'

type repoProps = {
  repo: repoType
}

const thumbnail =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

function Repo({ repo }: repoProps) {
  const {
    name,
    clone_url,
    description,
    full_name,
    homepage,
    language,
    topics,
  } = repo

  return (
    <Card
      sx={{
        width: '350px',
        margin: '10px',
        cursor: 'pointer',
        height: 'fit-content',
        border: '0.2px solid #e0e0e0',
        borderTop: '5px solid #e0e0e0',
        borderRadius: '34px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        '&:hover': {
          boxShadow: 4,
          transition: 'box-shadow 0.3s ease-in-out',
        },
      }}
    >
      <CardMedia
        component='img'
        sx={{
          objectFit: 'cover',
          height: '40%',
          width: 'auto',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        src={thumbnail}
        alt='main language'
      />
      <Divider />
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
            margin: '0px',
            marginTop: '10px',
            marginBottom: '5px',
          }}
        />
        <Typography variant='body1' gutterBottom>
          {description?.length > 0 && description.length > 200
            ? description.substring(0, 200).concat(' ...')
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
                sx={{ mx: '1px' }}
              />
            ))}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          px: 8,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <Button
          variant='contained'
          color='primary'
          size='small'
          startIcon={<CodeIcon />}
          href={clone_url || 'https://github.com/v-limo'}
          target='_blank'
          rel='noopener noreferrer'
        ></Button>
        {homepage && (
          <Button
            variant='contained'
            color='primary'
            size='small'
            href={homepage}
            target='_blank'
            rel='noopener noreferrer'
          >
            demo
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default Repo
