import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, Typography, TextField } from '@mui/material'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Grid item>
        <Typography variant='body1' fontSize={39} fontWeight='light'> 28 de agosto, 2023</Typography>
      </Grid>
      <Grid item>
        <Button color='primary' sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          fullWidth
          type='text'
          variant='filled'
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          fullWidth
          type='text'
          multiline
          variant='filled'
          placeholder='¿Qué sucesió en el día de hoy?'
          minRows={5}
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
