import { Box } from "@mui/material"
import { NavBar } from "../components"

const drawerWith = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ dusplay: 'flex' }}>
      <NavBar drawerWith={drawerWith} />
      {/* SideBar */}

      <Box
        component='main'
        sx={{ flexWrow: 1, p: 3 }}
      >
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  )
}
