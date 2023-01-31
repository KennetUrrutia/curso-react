import { StarOutline, StartOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0} //que no halla espacio entre los hijos
      direction='column' //es el flexbox
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
      <Grid item xs={12} >
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>
      <Grid item xs={12} >
        <Typography variant='h5' color='white'>Selecciona o crea una entrada</Typography>
      </Grid>
    </Grid>
  )
}
