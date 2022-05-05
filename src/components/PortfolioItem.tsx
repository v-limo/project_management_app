import React from 'react'

import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'

type Props = {
  children?: React.ReactNode
  title: string
  expanded?: boolean
}

const PortfolioItem = ({ children, title }: Props) => {
  return (
    <Accordion
      sx={{
        width: '100%',
        mb: '20px',
        borderRadius: '10px',
        '&:hover': {
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-label='Expand'
        aria-controls='-content'
        id={`-content-${title}`}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 'auto',
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ width: '100%' }}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  )
}
export default PortfolioItem
