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

  const navItem = {
    mx: 3,
    cursor: 'pointer',
    fontSize: '1.3rem',
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
      color: 'palette.primary.light',
      borderBottom: '1px solid',
      borderBottomColor: '#088',
    },
  }

  return (
    <AppBar sx={{ p: '4px', backgroundColor: 'palette.primary.main' }}>
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
            '&:hover': {
              color: 'palette.primary.light',
              borderBottom: '2px solid',
              borderBottomColor: '#088',
            },
          }}
          onClick={() => navigate('/')}
        >
          Management Dashboard
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          }}
        >
          <Box sx={navItem} onClick={() => navigate('/')}>
            Home
          </Box>

          {/* <Box sx={navItem} onClick={() => navigate('/portfolio')}>
          Portfolio
        </Box> */}

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
