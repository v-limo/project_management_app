import { createTheme } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#006782',
    },
    secondary: {
      main: '#4c626b',
    },
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#b5eaff',
    },
    secondary: {
      main: '#cfe6f1',
    },
    mode: 'light',
  },
})

export { darkTheme, lightTheme }
