import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useSelector } from 'react-redux'

export const LoginPage = () => {
  const { status } = useSelector(state => state.auth)
  const { email, password, handleChange, handleSubmit, handleGoogleSubmit } = useForm({
    email: 'kennetu200@gmail.com',
    password: 'RlqjFTfcfv'
  })

  //Si el estatus es diferente de checking va a regresar un valor boolean en isAuthenticating
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  return (
    <AuthLayout title='login'>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id='email'
              name='email'
              type='email'
              label='Correo'
              placeholder='ejemplo@gmail.com'
              value={email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id='password'
              name='password'
              label='Password'
              type='password'
              value={password}
              onChange={handleChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button
                disabled={isAuthenticating}
                fullWidth
                variant='contained'
                type='submit'
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button
                disabled={isAuthenticating}
                fullWidth
                variant='contained'
                onClick={handleGoogleSubmit}
              >
                <Google />
                <Typography variant='body1' sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link color='inherit' to='/auth/register' component={RouterLink} sx={{ mt: 2 }}>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
