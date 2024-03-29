import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from "../../hooks";
import {
  setActiveNote,
  startDeleteNote,
  startSaveNote,
  startUploadFiles,
} from "../../store/journal";

import { ImageGallery } from "../components";
import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, isSaving, messageSaved } = useSelector(
    (state) => state.journal,
  );
  const { title, body, date, imagesUrl, onInputChange, formState } =
    useForm(activeNote);

  const dateString = useMemo(() => {
    const textDate = new Date(date).toUTCString();
    return textDate;
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "Guardado exitoso!",
        text: messageSaved,
        icon: "success",
      });
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onDeleteNote = () => {
    dispatch(startDeleteNote());
    Swal.fire({
      title: "Elminación exitosa!",
      text: "La nota fué eliminada correctamente",
      icon: "success",
    });
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadFiles(target.files));
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="end"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid container>
        <Grid item>
          <Typography fontSize={24} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <input
          type="file"
          ref={fileInputRef}
          multiple
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />

        <Button
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
          color="inherit"
          sx={{ p: 1 }}
        >
          <UploadOutlined />
          <Typography sx={{ fontSize: 16, ml: 1 }}>Subir</Typography>
        </Button>

        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="inherit"
          sx={{ p: 1, mx: 1 }}
        >
          <SaveOutlined />
          <Typography sx={{ fontSize: 16, ml: 1 }}>Guardar</Typography>
        </Button>

        <Button
          disabled={isSaving}
          onClick={onDeleteNote}
          color="inherit"
          sx={{ p: 1 }}
        >
          <DeleteOutline />
          <Typography sx={{ fontSize: 16, ml: 1 }}>Borrar</Typography>
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          placeholder="Título de tu nota"
          label="Titulo"
          sx={{ border: "none", my: 1 }}
          fullWidth
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          multiline
          minRows={5}
          placeholder="¿Que deseas recordar hoy?"
          fullWidth
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery images={activeNote.imagesUrl} />
    </Grid>
  );
};
