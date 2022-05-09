import { Box, Typography, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '70vh',
      }}
    >
      <CircularProgress color='primary' />
      <Typography>Loading for projects .....</Typography>      
    </Box>
  )
}
