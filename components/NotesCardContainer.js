import React from 'react';
import { connect } from 'react-redux'
import { newNote, openNewNoteModal } from '../actions/notes'
import Notes from "./NotesCard";

class NotesCardContainer extends React.Component {
  // static getDerivedStateFromProps(props) {
  //   if (props.notes.length === 0) 
  //     props.newNote();
  //     return {};
  // }

  render() {
    return <Notes {...this.props} />;
  }
}


const mapDispatchToProps = dispatch => ({
  newNote: note => dispatch(newNote(note)),
  openNewNoteModal: () => dispatch(openNewNoteModal())
})

export default connect(state => state.notes, mapDispatchToProps)(NotesCardContainer);
