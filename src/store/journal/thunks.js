import {
  createNote,
  deleteNote,
  readNotes,
  setActiveNote,
  setCreatingNote,
  setPhotosToActiveNote,
  setSavingNote,
  updateNote,
} from './';
import { loadNotes, uploadFile } from '../../journal/helpers';
import { FirebaseDatabase } from '../../firebase/config';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';

export const startCreateNote = () => {
  return async (dispatch, getState) => {
    dispatch(setCreatingNote());
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
      imagesUrl: [],
    };
    const newDoc = doc(
      collection(FirebaseDatabase, `journal-app/users/${uid}/journal/notes`)
    );
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(createNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startReadNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('El uid del usuario no existe');
    const notes = await loadNotes(uid);
    dispatch(readNotes(notes));
  };
};

export const startSetActiveNote = (activeNote) => {
  return async (dispatch) => {
    dispatch(setActiveNote(activeNote));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSavingNote());
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    const noteToFirestore = { ...activeNote };
    delete noteToFirestore.id;
    const docRef = doc(
      FirebaseDatabase,
      `journal-app/users/${uid}/journal/notes/${activeNote.id}`
    );
    await setDoc(docRef, noteToFirestore, { merge: true });
    dispatch(updateNote(activeNote));
  };
};

export const startUploadFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSavingNote());
    const uploadFilePromises = [];
    for (const file of files) {
      uploadFilePromises.push(uploadFile(file));
    }
    const photoUrls = await Promise.all(uploadFilePromises);
    dispatch(setPhotosToActiveNote(photoUrls));
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    const docRef = doc(
      FirebaseDatabase,
      `journal-app/users/${uid}/journal/notes/${activeNote.id}`
    );
    await deleteDoc(docRef);
    dispatch(deleteNote(activeNote.id));
  };
};
