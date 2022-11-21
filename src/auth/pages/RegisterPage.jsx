import React, { useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateUserWithEmailPassword } from '../../store/auth'

const formData = {
  displayName: '',
  email: '',
  password: ''
};
const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debecontener una @'],
  password: [ (value) => value.length >= 6, 'La password debe tener al menos 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmited, setFormSubmited] = useState(false);

  const {status , errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status=== 'checking' , [status]);

  const { displayName, email, password, formState, onInputChange,
          displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);

    if (!isFormValid) return;

    dispatch(startCreateUserWithEmailPassword(formState));
    // console.log(formState);
  }
  return (
    <AuthLayout title="Crear cuenta">
      <h1>es Valido: { isFormValid ? 'Valido' : 'Invalido'}</h1>
      <form onSubmit={ onSubmit }
          className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="Nombre Completo" type="text"
              placeholder='Tu Nombre Completo' fullWidth
              name = 'displayName' value={ displayName } onChange={onInputChange}
              error={ !!displayNameValid && formSubmited }
              helperText={ displayNameValid } />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label="correo" type="email"
              placeholder='correo@google.com' fullWidth
              name = 'email' value={ email } onChange={onInputChange}
              error={ !!emailValid && formSubmited }
              helperText={ emailValid } />
           </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña" type="password"
              placeholder='Contraseña' fullWidth
              name = 'password' value={ password } onChange={onInputChange}
              error={ !!passwordValid && formSubmited }
              helperText={ passwordValid } />
           </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6} display={ !!errorMessage ? '':'none'}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth>
              Login
            </Button>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr:1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
