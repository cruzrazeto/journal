import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        {/* CSS Baseline kickstarter */}
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}