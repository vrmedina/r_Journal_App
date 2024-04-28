import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import {
  createNote,
  setActiveNote,
  setCreatingNote,
} from "../../../src/store/journal/journalSlice";
import { startCreateNote } from "../../../src/store/journal/thunks";
import { FirebaseDatabase } from "../../../src/firebase/config";

describe("Pruebas en JournalThunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startCreateNote debe crear una nueva nota en blanco", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({ auth: { uid: uid } });

    await startCreateNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setCreatingNote());
    expect(dispatch).toHaveBeenCalledWith(
      createNote({
        body: "",
        title: "",
        imagesUrl: [],
        id: expect.any(String),
        date: expect.any(Number),
      }),
    );
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: "",
        title: "",
        imagesUrl: [],
        id: expect.any(String),
        date: expect.any(Number),
      }),
    );

    // Borrar de Firebase
    const collectionRef = collection(FirebaseDatabase, `journal-app/users/${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

    await Promise.all(deletePromises);
  });
});
