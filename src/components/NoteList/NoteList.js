import React from 'react';
import Note from '../Note/Note';

const NoteList = ({ notes = [], deleteNote, toggleNote }) => (
  <div>
    {notes.map(note => (
      <Note
        key={note.id}
        {...note}
        onDelete={() => deleteNote(note.id)}
        onToggleComplete={() => toggleNote(note.id, note)}
      />
    ))}
  </div>
);
export default NoteList;
