import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    // activeNote: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 123456,
    //     imagesUrl: [], // ['https://foto1.jpg', 'https://foto2.jpg', 'https://foto3.jpg']
    // }
  },
  reducers: {
    setCreatingNote: (state) => {
      state.isSaving = true;
    },
    setSavingNote: (state) => {
      state.isSaving = true;
      // Mensaje
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
    },
    createNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    readNotes: (state, action) => {
      state.notes = action.payload;
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;
        return note;
      });
      // Mostrar mensaje
    },
    deleteNote: (state, action) => {
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createNote,
  deleteNote,
  readNotes,
  setActiveNote,
  setCreatingNote,
  setSavingNote,
  updateNote,
} = journalSlice.actions;
