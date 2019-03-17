import React from 'react';
import styled from 'styled-components';

import Button from '../../ui/Button';

const Note = ({ text, onDelete, onToggleComplete, completed }) => (
  <div>
    <Task completed={completed}>{text}</Task>
    <footer>
      <label>
        Done
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggleComplete}
        />
      </label>
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </footer>
  </div>
);

const Task = styled.p`
  font-size: 20px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

export default Note;
