import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDatabase } from '../../firebase/config';

export const loadNotes = async (uid = '') => {
  if (!uid) throw new Error('El uid del usuario no existe');

  const collectionRef = collection(
    FirebaseDatabase,
    `journal-app/users/${uid}/journal/notes`
  );
  const docs = await getDocs(collectionRef);
  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  return notes;
};
