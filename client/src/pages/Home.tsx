import React from 'react'

import { Box, Typography } from '@mui/material'

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
    <Projects />
  </Box>
)
