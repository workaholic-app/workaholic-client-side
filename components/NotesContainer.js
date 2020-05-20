import React from 'react';
import { connect } from 'react-redux'
import { newNote, openNewNoteModal } from '../actions/notes'
import { withRouter } from 'next/router'
import Note from "./Note"
import NoteEdit from "./NoteEdit";

class NotesContainer extends React.Component {
  componentWillMount() {

  }

  render() {
    let { openNote } = this.props;
    console.log("note", this.props);
    return (<div>
      {/* <LeftBar /> */}
      <p>Hello world</p>
      <Note {...this.props} />
    </div>);
  }
}


const mapDispatchToProps = dispatch => ({
  newNote: note => dispatch(newNote(note)),
  openNewNoteModal: () => dispatch(openNewNoteModal())
})

export default connect(state => state.notes, mapDispatchToProps)(withRouter(NotesContainer));
