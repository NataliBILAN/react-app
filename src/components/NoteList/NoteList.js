import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Note from '../Note/Note';

const NoteList = ({ notes = [], deleteNote, toggleNote, onDragEnd }) => (
  <div>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {notes.map((note, index) => (
              <Note
                key={note.id}
                {...note}
                onDelete={() => deleteNote(note.id)}
                onToggleComplete={() => toggleNote(note.id, note)}
                index={index}
                note={note}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
);
export default NoteList;
