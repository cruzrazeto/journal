import React, { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWhitEmailPassword } from "../../store/auth";

const formData = {
  email: '',
  password: ''
};
const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debecontener una @'],
  password: [ (value) => value.length >= 6, 'La password debe tener al menos 6 letras'],
};


export const LoginPage = () => {

  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth );

  const isAuthenticating = useMemo( () => status === 'checking', [status]);
 
  const { email, password, formState, onInputChange,
    emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);

    if (!isFormValid) return;
    // console.log({email, password});
    // TODO: no es la accion a depachar
    // dispatch(startLoginWhitEmailPassword({ email, password }));
    dispatch(startLoginWhitEmailPassword(formState));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }
          className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={onInputChange}
              error={ !!emailValid && formSubmited }
              helperText={ emailValid } />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={onInputChange}
              error={ !!passwordValid && formSubmited }
              helperText={ passwordValid } />
          </Grid>
        </Grid>

        <Grid container display={ !!errorMessage ? '':'none'} sx={{ mt:1 }}>
          <Grid item xs={12}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
        </Grid>


        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button  disabled={isAuthenticating} variant="contained" onClick={ onGoogleSignIn } fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
