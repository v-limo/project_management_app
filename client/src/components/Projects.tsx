import { Box } from '@mui/material'
import React from 'react'
import SplitPane, { Pane } from 'react-split-pane'

import Stage from './Stage'

const Projects = () => {
  let stages = ['PLANNING', 'DESIGNING', 'DEVELOPMENT', 'TESTING', 'RELEASE']

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        my: '1.3rem',
        mx: 'auto',
        minHeight: '100vh',
        justifyContent: 'space-around',
      }}
    >
      {stages?.map((stage) => (
        <Stage stage={stage} key={stage} />
      ))}
    </Box>
  )
}
export default Projects
