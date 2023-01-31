import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components'

const drawerWidth = 300

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ dusplay: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3, pl: 40 }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  )
}
