import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import darkModeReducer from '../features/darkMode/darkModeSlice'
import reposReducer from '../features/repos/reposSlice'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    repos: reposReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
