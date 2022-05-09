import { Box,Typography, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '50vh',
        // backgroundColor: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <CircularProgress color='primary' />
      <Typography type='text'>Loading for projects .....</Typography>
    </Box>
  )
}
