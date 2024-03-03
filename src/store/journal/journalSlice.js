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
      console.log(state);
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
    },
    createNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    readNotes: (state, action) => {
      console.log(state);
    },
    updateNote: (state, action) => {
      console.log(state);
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
