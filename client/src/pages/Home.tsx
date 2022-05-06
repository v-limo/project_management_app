import React from 'react'

import { Box } from '@mui/material'

import Hero from '../components/Hero'
import Projects from '../components/Projects'

export const Home = () => (
  <Box
    sx={{
      maxWidth: '100vw',
      mx: 'auto',
      height: 'fit-content',
    }}
  >
    <Hero />
    <Projects />
  </Box>
)
