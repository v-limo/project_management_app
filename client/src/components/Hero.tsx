import React from 'react'
import { useSelector } from 'react-redux'

import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Avatar, Box, Typography } from '@mui/material'

import { selectRepos } from '../features/repos/reposSlice'
import background from '../img/background.jpg'

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '80vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 1,
        zIndex: -1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        color: '#ffffff',
      }}
      minWidth='sm'
    >
      <Typography
        variant='h3'
        sx={{
          fontFamily: 'heading',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        Project Management Dashboard
      </Typography>
    </Box>
  )
}

export default Hero
