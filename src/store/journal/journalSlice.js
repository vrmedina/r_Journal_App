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
      state.messageSaved = '';
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.messageSaved = '';
    },
    setPhotosToActiveNote: (state, action) => {
      state.activeNote.imagesUrl = [
        ...state.activeNote.imagesUrl,
        ...action.payload,
      ];
      state.isSaving = false;
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
      state.messageSaved = `La nota fué actualizada correctamente`;
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.activeNote = null;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.activeNote = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  clearNotesLogout,
  createNote,
  deleteNote,
  readNotes,
  setActiveNote,
  setCreatingNote,
  setPhotosToActiveNote,
  setSavingNote,
  updateNote,
} = journalSlice.actions;
