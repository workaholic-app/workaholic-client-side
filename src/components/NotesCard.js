import React from "react";
import styles from "../styles/TasksCard.module.scss";
import Card from "./Card";
import { notesContext } from "../contexts/NotesContext";
// import Router from 'next/router'

const Notes = (props) => {
  const { state, dispatch } = React.useContext(notesContext);
  const { notes } = state;
  let openNewNoteModal = () => {
    props.openNewNoteModal();
    // Router.push('/notes');
  };

  let openNote = (id) => {
    // props.openNewNoteModal();
    // Router.push({
    //   pathname: '/notes',
    //   query: { noteId: id },
    // });
  };

  return (
    <Card 
      className={styles['tasks-card']}
      title={"Notes"}
    >
      <button onClick={openNewNoteModal}>New Note</button>
      <ul>
        {
          notes.map(note => <li key={note.id} onClick={() => openNote(note.id)}>{note.title}</li>)
        }
      </ul>
    </Card>
  )
};

export default Notes;