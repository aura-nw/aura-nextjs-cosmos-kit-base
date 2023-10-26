import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    custom: ThemeCustomProp
  }

  interface ThemeOptions {
    custom: ThemeCustomProp
  }
}

declare module '@mui/material' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    xs: true
    qm: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      qm: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
  },
  custom: { red1: '#E01111', sencondaryBackgroundColor: 'rgb(255, 255, 255)' },
})
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  custom: { red1: '#E01111', sencondaryBackgroundColor: 'rgb(39, 40, 45)' },
})

interface ThemeCustomProp {
  red1: any
  sencondaryBackgroundColor: string
}
