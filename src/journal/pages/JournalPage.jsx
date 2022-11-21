import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../../auth/layout'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
    {/* <Typography>Fugiat tempor irure deserunt aliqua nulla officia adipisicing nulla eiusmod ea elit ullamco. Excepteur dolore consectetur laboris exercitation labore anim laborum labore sunt reprehenderit nostrud commodo. Eiusmod aliqua cupidatat officia pariatur sunt labore proident quis elit aute ea veniam. Commodo non esse pariatur esse deserunt culpa quis adipisicing proident quis ullamco.</Typography> */}
    {/* Nada seleccionado */}
    {/* <NothingSelectedView/> */}
    {/* Notas */}
    <NoteView/>
    <IconButton
      size='large'
      sx={{
        color:'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity:0.7},
        position:'fixed',
        right: 50,
        bottom:50
      }}>
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
