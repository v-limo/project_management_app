import React from 'react'

import { Box, Divider, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        mx: 'auto',
        display: 'flex',
        height: 'fit-content',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          backgroundColor: '#e0e0e0',
          margin: '0px',
        }}
      />
      <Typography variant='h6' gutterBottom>
        Design and developed with ❤️ by Vincent Limo - &copy;2019 -{' '}
        {new Date().getFullYear()}
      </Typography>
      <Typography variant='body1' gutterBottom></Typography>

      <Typography variant='body1' gutterBottom>
        The code is free and open source -
        <a href='https://github.com/v-limo?tab=repositories'>GitHub</a>
      </Typography>
      <Typography variant='body1' gutterBottom>
        <a href='/policy'>Privacy Policy</a>
      </Typography>
    </Box>
  )
}
