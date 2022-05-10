import React, { useCallback } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'

import { Box } from '@mui/material'

import { changeStage, selectRepos } from '../features/repos/reposSlice'
import Stage from './Stage'
import { Loading } from './Loading'

import { useSelector } from 'react-redux'

const Projects = () => {
  let stages = ['backlog', 'todo', 'inProgress', 'review', 'done']
  const dispatch = useDispatch()
  const { isLoading } = useSelector(selectRepos)

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId } = result
      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      ) {
        return
      }
      dispatch(changeStage({ destination, draggableId, source }))
    },
    [dispatch]
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{
          display: 'flex',
          width: '95%',
          my: '1.3rem',
          mx: 'auto',
          height: 'fit-content',
          justifyContent: 'space-around',
        }}
      >
        {stages.map((stage) => (
          <Stage stage={stage} key={stage} />
        ))}
      </Box>
    </DragDropContext>
  )
}
export default Projects
