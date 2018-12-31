import React from 'react';

const Note = ({ text, onDelete, onToggleComplete, completed }) => (
  <div>
    <p>{text}</p>
    <footer>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
      <label>
        Done
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleComplete}
        />
      </label>
    </footer>
  </div>
);
export default Note;
