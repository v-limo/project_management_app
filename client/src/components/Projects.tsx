import React from 'react'

import { Box } from '@mui/material'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Stage from './Stage'

const Projects = () => {
  let stages = ['PLANNING', 'DESIGNING', 'DEVELOPMENT', 'TESTING', 'RELEASE']

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }
  }

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
      <DragDropContext onDragEnd={onDragEnd}>
        {stages.map((stage) => (
          <Droppable droppableId={stage} key={stage}>
            {() => <Stage stage={stage} />}
          </Droppable>
        ))}
      </DragDropContext>
    </Box>
  )
}
export default Projects
