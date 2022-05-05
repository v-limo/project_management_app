import React from 'react'
import { useSelector } from 'react-redux'

import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Avatar, Box, Typography } from '@mui/material'

import { selectRepos } from '../features/repos/reposSlice'
import background from '../img/background.jpg'

const Hero = () => {
  const { repos } = useSelector(selectRepos)

  const contactIcon = {
    margin: '0.5rem',
    color: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    height: '3rem',
    width: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      // padding: '3rem',
      color: 'primary.main',
    },
  }

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.8,
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
      <Avatar
        alt='Vincent Limo'
        src={repos && repos[0]?.owner?.avatar_url}
        sx={{
          width: 150,
          height: 150,
        }}
      />
      <Box>
        <Typography
          variant='h4'
          sx={{
            fontFamily: 'heading',
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          It's me, Vincent Limo
        </Typography>
        <Typography
          variant='h5'
          sx={{
            textAlign: 'center',
          }}
        >
          Full-Stack Software Engineer
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          mt: '1rem',
        }}
      >
        <a href='https://github.com/v-limo' target='_blank' rel='noreferrer'>
          <GitHubIcon sx={contactIcon} />
        </a>
        <a
          href='https://www.linkedin.com/in/vincentlimo/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon sx={contactIcon} />
        </a>
        <a href='mailto:vinceleemo@gmail.com'>
          <EmailIcon sx={contactIcon} />
        </a>
      </Box>
    </Box>
  )
}
export default Hero
