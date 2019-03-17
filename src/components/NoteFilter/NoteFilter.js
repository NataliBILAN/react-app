import React from 'react';
import styled from 'styled-components';

const NoteFilter = ({ value = '', onChange = () => null }) => (
  <Filter>
    <Label>Find your task</Label>
    <Input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Type what you search"
    />
  </Filter>
);

const Filter = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Label = styled.label`
  font-size: 30px;
  text-transform: uppercase;
`;
const Input = styled.input`
  padding: 10px 20px;
  outline: transparent;
  background-color: transparent;
  border: solid 3px transparent;
  border-bottom: dashed 3px #ea95e0;
  font-family: 'Gochi Hand', cursive;
  font-size: 25px;
`;
export default NoteFilter;
