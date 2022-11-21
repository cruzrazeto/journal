import React from 'react'
import { Box } from '@mui/system'
import { NavBar, SideBar } from '../../journal/components';
import { Toolbar } from '@mui/material';

const drawerWidth = 240;

export const JournalLayout = ( {children} ) => {
  return (
    <Box sx={{ display: 'flex' }}
        className='animate__animated animate__fadeIn animate__faster'>
        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth }/>

        {/* Sidebar */}
        <SideBar drawerWidth={ drawerWidth }/>

        <Box component='main'
          sx={{ flexGrow: 1, p:3 }}>
        {/* Toolbar */}
        <Toolbar/>
        { children }
        </Box>
    </Box>
  )
}
