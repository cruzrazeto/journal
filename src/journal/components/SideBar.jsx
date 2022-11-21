import React from 'react'
import { Box, Drawer, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import { FirebaseApp } from '../../firebase'
import { useSelector } from 'react-redux'

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector( state => state.auth)
  return (
    <Box component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='permanent' open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}>
        <Typography variant='h6' noWrap component='div'>{ displayName }</Typography>
        <Divider />
        <List>
          {
            ['Enero', 'Febrero', 'Marzo', ' Abril'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Commodo magna incididunt magna nostrud.'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
