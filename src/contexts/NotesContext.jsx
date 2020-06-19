import React from "react";

export const ActionType = {
  NEW_NOTE: 'NEW_NOTE',
  OPEN_NEW_NOTE_MODAL: 'OPEN_NEW_NOTE_MODAL'
};

const initialState = {
  notes: [{ id: 0, title: "First Note", content: "Hello World"}],
  openNote: null,
  isEditing: false
};

const reducer = (state, action) => {
  switch(action.type) {
    case ActionType.NEW_NOTE:
      return { ...state, notes: [ ...state.notes, action.note ] };
    case ActionType.OPEN_NEW_NOTE_MODAL:
      return { ...state, isEditing: true };
    default: 
      throw new Error("Invalid Action");
  }
}

export const notesContext = React.createContext({
  state: { notes: [] },
  updateNotes: () => {}
});


const { Provider } = notesContext;
export const NotesContextProvider = ({ children }) => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>{children}</Provider>
  );
};