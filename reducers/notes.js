import { 
  NEW_NOTE,
  OPEN_NEW_NOTE_MODAL
} from '../actions/notes';

const initialState = {
  notes: [{ id: 0, title: "First Note", content: "Hello World"}],
  openNote: null,
  isEditing: false
}

export function notes(state = initialState, action) {
  switch (action.type) {
    case NEW_NOTE:
      return { ...state, notes: [ ...state.notes, action.note ] };
    case OPEN_NEW_NOTE_MODAL:
      return { ...state, isEditing: true };
    default: return state
  }
}