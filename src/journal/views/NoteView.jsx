import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={24} fontWeight='light'>
          25 de Febrero de 2024
        </Typography>
      </Grid>
      <Grid item>
        <Button color='inherit' sx={{ p: 1 }}>
          <SaveOutlined />
          <Typography sx={{ fontSize: 16, ml: 1 }}>Guardar</Typography>
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type='text'
          variant='filled'
          placeholder='Título de tu nota'
          label='Titulo'
          sx={{ border: 'none', my: 1 }}
          fullWidth
        />
        <TextField
          type='text'
          variant='filled'
          multiline
          minRows={5}
          placeholder='¿Que deseas recordar hoy?'
          fullWidth
        />
      </Grid>

      {/* Galeria de imagenes */}
      <ImageGallery />
    </Grid>
  );
};
