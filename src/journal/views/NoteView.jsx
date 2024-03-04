import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks';
import { setActiveNote, startSaveNote } from '../../store/journal';

import { ImageGallery } from '../components';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, isSaving, messageSaved } = useSelector(
    (state) => state.journal
  );
  const { title, body, date, imagesUrl, onInputChange, formState } =
    useForm(activeNote);

  const dateString = useMemo(() => {
    const textDate = new Date(date).toUTCString();
    return textDate;
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: 'Guardado exitoso!',
        text: messageSaved,
        icon: 'success',
      });
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

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
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color='inherit'
          sx={{ p: 1 }}
        >
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
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='filled'
          multiline
          minRows={5}
          placeholder='¿Que deseas recordar hoy?'
          fullWidth
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Galeria de imagenes */}
      <ImageGallery />
    </Grid>
  );
};
