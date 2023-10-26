import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface themeState {
  theme: string
}

const initialState: themeState = {
  theme: process.env.NEXT_PUBLIC_THEME_MODE || 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    }
  }
})
const themeReducer = themeSlice.reducer

export const { updateTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.theme
export default themeReducer
