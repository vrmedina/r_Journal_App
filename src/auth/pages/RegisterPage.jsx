import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import validator from 'validator';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

import { startSignUpWithEmail } from '../../store/auth';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  displayName: [
    (value) =>
      validator.matches(
        value + '',
        new RegExp('^([a-zA-Zà-úÀ-Ú]{2,})+\\s+([a-zA-Zà-úÀ-Ú\\s]{2,})+$')
      ),
    'Por favor escribe tu nombre completo',
  ],
  email: [
    (value) => validator.isEmail(value + ''),
    'Por favor escribe un correo válido',
  ],
  password: [
    (value) => validator.isStrongPassword(value + ''),
    'La contraseña debe mínimo 8 caracteres, combinar mayúsculas y minúsculas, e incluir números y símbolos',
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  );

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameIsValid,
    emailIsValid,
    passwordIsValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    if (isCheckingAuthentication) return;

    dispatch(startSignUpWithEmail(formState));
  };

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Escribe tu nombre'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameIsValid && formSubmitted}
              helperText={displayNameIsValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailIsValid && formSubmitted}
              helperText={emailIsValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordIsValid && formSubmitted}
              helperText={passwordIsValid}
            />
          </Grid>
          <Grid
            container
            display={errorMessage ? '' : 'none'}
            spacing={2}
            sx={{ mt: 1, mb: 2 }}
          >
            <Grid item xs={12}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant='contained'
                fullWidth
              >
                <Typography>Crear cuenta</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={'row'} justifyContent={'end'}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              <Typography>Iniciar sesion</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
