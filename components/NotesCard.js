import styles from "./TasksCard.module.scss";
import Card from "./Card";
import Router from 'next/router'

const Notes = (props) => {
  let { notes } = props;
  let openNewNoteModal = () => {
    props.openNewNoteModal();
    Router.push('/notes');
  };

  let openNote = (id) => {
    // props.openNewNoteModal();
    Router.push({
      pathname: '/notes',
      query: { noteId: id },
    });
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

Notes.getInitialProps = ({store, isServer, pathname, query}) => {
  store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
  return { custom: 'custom' }; // You can pass some custom props to the component from here
}

export default Notes;