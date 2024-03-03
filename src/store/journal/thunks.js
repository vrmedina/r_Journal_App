import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDatabase } from '../../firebase/config';

export const startCreateNote = () => {
  return async (dispatch, getState) => {
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
    
  };
};
