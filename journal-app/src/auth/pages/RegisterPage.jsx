import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks'


const formData = {
  email: 'kennetu200@gmail.com',
  password: 'password',
  displayName: 'Kennet Urrutia'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [(value) => value.length >= 6, 'El password deebe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 1, 'El nombre es obrligatorio']
}

export const RegisterPage = () => {

  const {
    displayName, email, password, handleChange, handleSubmit, handleGoogleSubmit,
    isFormValid, isDisplayNameValid, isEmailValid, isPasswordValid
  } = useForm(formData, formValidations)

  return (
    <AuthLayout title='Crear Cuenta'>
      <h1>Form Valid: {isFormValid ? 'Valido' : 'Incorrecto'}</h1>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              type='text'
              id='displayName'
              label='Nombre completo'
              placeholder='Pablo Emilio Escobar'
              name='displayName'
              value={displayName}
              onChange={handleChange}
              error={isDisplayNameValid}
              helperText={isDisplayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              type='email'
              id='email'
              label='Correo'
              placeholder='PabloEmilio@gmail.com'
              name='email'
              value={email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id='password'
              label='Password'
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
              >
                Crear cuenta
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
