import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='login'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id='email'
              label='Correo'
              type='email'
              placeholder='ejemplo@gmail.com'
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
                <Typography variant="body1" sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link color='inherit' to='/auth/register' component={RouterLink} sx={{mt: 2}}>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
