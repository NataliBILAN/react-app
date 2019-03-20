import React, { Component } from 'react';
import styled from 'styled-components';

import NoteEditor from './components/NoteEditor';
import AppHeader from './components/AppHeader/AppHeader';
import NoteList from './components/NoteList';

class App extends Component {
  onDragEnd = () => {};

  render() {
    return (
      <Wrapper>
        <Title>To-do list</Title>
        <AppHeader />
        <NoteEditor />
        <NoteList />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 60px;
  width: 20%;
  text-align: center;
  padding: 0.2rem 1.2rem;
  margin: 0 auto 30px;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  background-color: hsla(166, 100%, 50%, 0.7);
`;

export default App;
