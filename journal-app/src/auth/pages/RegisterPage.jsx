import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { Google } from '@mui/icons-material'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id='name'
              label='Nombre completo'
              type='text'
              placeholder='Pablo Emilio Escobar'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id='email'
              label='Correo'
              type='email'
              placeholder='PabloEmilio@gmail.com'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id='password'
              label='Password'
              type='password'
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography variant='body1' sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid container direction='row' justifyContent='end' sx={{ mt: 2 }}>
              <Typography variant='body1'>¿Ya tienes cuenta?</Typography>
              <Link color='inherit' to='/auth/login' component={RouterLink} sx={{ ml: 1 }}>
                ingresar
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
