import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import Button from '../../ui/Button';

const Note = ({ text, onDelete, onToggleComplete, completed, note, index }) => (
  <Draggable key={note.id} draggableId={note.id} index={index}>
    {provided => (
      <Wrapper
        completed={completed}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Task completed={completed}>{text}</Task>
        <Footer>
          <Label>
            Done
            <Checkbox
              type="checkbox"
              checked={completed}
              onChange={onToggleComplete}
            />
          </Label>
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        </Footer>
      </Wrapper>
    )}
  </Draggable>
);
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 600px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 20px 30px;
  background-color: ${props => (props.completed ? '#4DB6AC' : '#CFD8DC')};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Task = styled.p`
  font-size: 28px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  margin-bottom: 20px;
`;
const Label = styled.label`
  font-size: 30px;
  cursor: pointer;
  border: none;
  font-size: 30px;
  color: #494a4b;
  padding: 15px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 0 #494a4b;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: rgba(0, 255, 196, 0.7);
  outline: transparent;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const Checkbox = styled.input`
  opacity: 0;
`;

export default Note;
