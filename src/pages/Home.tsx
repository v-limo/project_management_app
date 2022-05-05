import React from 'react'

import { Box, Typography } from '@mui/material'

import { ContactComponent } from '../components/ContactComponent'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export const Home = () => (
  <Box
    sx={{
      maxWidth: '100vw',
      mx: 'auto',
    }}
  >
    <Hero />
    <Typography
      variant='h6'
      sx={{
        fontWeight: 'bold',
        margin: '20px',
        fontSize: '1.5rem',
        textAlign: 'center',
      }}
    >
      RECENT PROJECTS 💻
    </Typography>
    <Projects />

    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        py: '20px',
        p: {
          sm: '1rem',
          md: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      }}
    >
      <ContactComponent />
    </Box>
  </Box>
)
