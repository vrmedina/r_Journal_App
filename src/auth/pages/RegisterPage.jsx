import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

import validator from 'validator';

const formData = {
  displayName: 'Victor Medina',
  email: 'victor@test.com',
  password: '123456',
};

const formValidations = {
  displayName: [
    (value) => validator.isAlpha(value + ''),
    'El nombre debe tener 3 caracteres o más, no puede contener números',
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
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    formIsValid,
    displayNameIsValid,
    emailIsValid,
    passwordIsValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(checkingAuthentication());
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
              error
              helperText='El nombre es obligatorio'
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
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
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
