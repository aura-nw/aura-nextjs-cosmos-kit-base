import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './dog/dog.slice'
import counterReducer from './counter/counter.slice'
import themeReducer from '@/features/theme/theme.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
