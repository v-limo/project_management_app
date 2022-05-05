import { Box } from '@mui/material'

import { ContactComponent } from '../components/ContactComponent'
import background from '../img/background.jpg'

export const Contact = () => {
  return (
    <Box
      sx={{
        height: 'fit-content',
        width: '100vw',

        backroundAttachment: 'fixed',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '90px',
        pb: '1rem',
      }}
    >
      <ContactComponent />
    </Box>
  )
}
