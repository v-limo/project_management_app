import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Chip, Divider, Modal, TextareaAutosize, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'

import { AddTask, selectRepos } from '../features/repos/reposSlice'
import { repoType, stageType } from '../types/reposType'
import Repo from './Repo'

type Props = {
  stage: stageType
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid green',
  boxShadow: 24,
  borderRadius: '0.5rem',
  height: 'auto',
  p: 4,
}
const Stage = ({ stage }: Props) => {
  const { repos } = useSelector(selectRepos)
  let reposByStage = repos.filter((repo) => repo?.stage === stage)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  const handleSubmit = () => {
    const repo = repos.length > 0 ? repos[0] : undefined

    if (!name || !description || !stage || !repo) {
      return alert('Please fill all the fields')
    }

    const newRepo = {
      id:
        Math.floor(Math.random() * 100) +
        1526 +
        repos.length +
        reposByStage.length,
      name,
      description,
      stage,
      owner: repo?.owner,
      dead_line: new Date(
        new Date().getTime() + 15 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    } as repoType

    dispatch(AddTask(newRepo))

    setOpen(false)
    setName('')
    setDescription('')
  }

  return (
    <Box
      sx={{
        flex: 1,
        width: '100%',
        mx: '5px',
        borderRadius: '0.5rem',
        borderTop: '1rem solid #e7ecf0',
        mt: '-2rem',
        minHeight: '50vh',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1,
        border: '0.2px solid #e0e0e0',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          textAlign: 'center',
          marginTop: '1rem',
          textTransform: 'uppercase',
          textDecoration: 'underline',
        }}
      >
        {stage}
      </Typography>
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          backgroundColor: '#e7ecf0',
          margin: '1rem 0',
        }}
      />

      <Droppable droppableId={stage}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '1rem',
            }}
          >
            {reposByStage &&
              reposByStage?.length > 0 &&
              reposByStage.map((repo, index) => (
                <Repo repo={repo} key={repo.id} index={index} />
              ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>

      <Chip
        sx={{
          m: 'auto',
          mb: '1rem',
        }}
        label={` Add Tasks to ${stage}`}
        variant='filled'
        color='success'
        onClick={handleClick}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography variant='h5' id='modal-modal-title'>
            Add Tasks to {stage}
          </Typography>
          <Divider
            sx={{
              width: '100%',
              height: '1px',
              margin: '1rem 0',
            }}
          />

          <FormControl
            sx={{
              width: '100%',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant='outlined'
              sx={{
                width: '100%',
                mx: 'auto',
                mb: '1rem',
              }}
              placeholder='Project name ie. Project 1'
              fullWidth
            />

            <FormLabel>Description</FormLabel>
            <TextareaAutosize
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: '100%',
                height: '100px',
                fontSize: '12px',
                border: '1px solid',
              }}
              id='text'
              minRows={6}
              aria-label='maximum height'
              placeholder='Project description ie. This is a project that will be used to test the application.'
            />

            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              sx={{
                mt: '1rem',
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </Box>
  )
}
export default Stage
