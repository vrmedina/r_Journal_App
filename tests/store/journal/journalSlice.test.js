import { journalSlice, setCreatingNote } from "../../../src/store/journal/journalSlice";
import { initialState } from "../../fixtures/journalFixtures";

describe("Pruebas en journalSlice", () => {
  test("debe regresar el estado inicial y llamarse jorunal", () => {
    expect(journalSlice.name).toBe("journal");

    const state = journalSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("debe cambiar isSaving a true cuando se llame setCreatingNote", () => {
    const state = journalSlice.reducer(initialState, setCreatingNote());
    expect(state).toEqual({
      isSaving: true,
      messageSaved: "",
      notes: [],
      activeNote: null,
    });
  });
});
