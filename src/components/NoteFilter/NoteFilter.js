import React from 'react';
import styled from 'styled-components';

const NoteFilter = ({ value = '', onChange = () => null }) => (
  <Filter>
    <Wrap>
      <Search className="fas fa-search" />
      <Label>Find your task</Label>
    </Wrap>
    <Input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Type what you search"
    />
  </Filter>
);
const Search = styled.i`
  font-size: 30px;
`;

const Filter = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Wrap = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 34px;
  text-transform: uppercase;
  margin-left: 20px;
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
