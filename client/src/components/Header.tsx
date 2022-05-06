import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Button } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import {
  selectDarkmode,
  toggleDarkMode,
} from '../features/darkMode/darkModeSlice'

export default function Bar() {
  let { darkMode } = useSelector(selectDarkmode)
  let dispatch = useDispatch()
  const navigate = useNavigate()


  return (
    <AppBar
      sx={{
        p: '4px',
        background: 'RGB(182, 234, 255,0.5)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          alignItems: 'center',
          p: 2,

          mx: 'auto',
          width: '100%',
        }}
      >
        <Box
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            cursor: 'pointer',
            fontFamily: 'heading',
            transition: 'all 0.3s ease-in-out',
            color: 'white',
            borderBottom: '3px solid purple',
          }}
          onClick={() => navigate('/')}
        >
          Dashboard
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          }}
        >
          <Button
            sx={{ p: 1, color: 'white' }}
            onClick={() => dispatch(toggleDarkMode())}
          >
            {!darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
