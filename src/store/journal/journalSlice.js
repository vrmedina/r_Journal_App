import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
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
    setActiveNote: (state, action) => {
      console.log(state);
    },
    setSavingNote: (state) => {
      console.log(state);
    },
    createNote: (state, action) => {
      console.log(state);
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
  setActiveNote,
  setSavingNote,
  createNote,
  readNotes,
  updateNote,
  deleteNote,
} = journalSlice.actions;
