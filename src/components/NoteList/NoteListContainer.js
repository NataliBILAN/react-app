import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteList from './NoteList';
import {
  notesAction,
  notesSelectors,
  notesOperations,
} from '../../modules/notes';

class NoteListContainer extends Component() {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return <NoteList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notes: notesSelectors.getFilteredNotes(state),
});
const mapDispatchToProps = {
  fetchNotes: notesOperations.fetchNotes,
  deleteNote: notesAction.deleteNote,
  toggleNote: notesAction.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteListContainer);
