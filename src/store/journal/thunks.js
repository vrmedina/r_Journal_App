import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDatabase } from '../../firebase/config';
import { createNote, setActiveNote, setCreatingNote } from './';

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
