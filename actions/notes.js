export const NEW_NOTE = 'NEW_NOTE';
export const OPEN_NEW_NOTE_MODAL = 'OPEN_NEW_NOTE_MODAL';


export function newNote(note) {
  return { type: NEW_NOTE, note };
};

export function openNewNoteModal() {
  return { type: OPEN_NEW_NOTE_MODAL }
}