import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { purpuleTheme } from './purpule'

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpuleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
