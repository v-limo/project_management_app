import React from 'react'

import { Box, Typography } from '@mui/material'

import background from '../img/background_2.jpg'

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '50vh',
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
          textTransform: 'uppercase',
          boxShadow: '0px 0px 10px rgba(246, 241, 241, 0.4)',
          padding: '1rem',
          borderRadius: '5px',
          fontWeight: 'bold',
          textDecoration: 'underline',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '100%',
        
        }}
      >
        Project Management Dashboard
      </Typography>
    </Box>
  )
}

export default Hero
