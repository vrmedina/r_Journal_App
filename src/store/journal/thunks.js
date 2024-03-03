import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDatabase } from '../../firebase/config';
import { createNote, readNotes, setActiveNote, setCreatingNote } from './';
import { loadNotes } from '../../journal/helpers/loadNotes';

export const startCreateNote = () => {
  return async (dispatch, getState) => {
    dispatch(setCreatingNote());
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
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
