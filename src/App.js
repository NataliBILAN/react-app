import React from 'react';
import NoteEditor from './components/NoteEditor';
import AppHeader from './components/AppHeader/AppHeader';
import NoteList from './components/NoteList';

const App = () => (
  <>
    <h2>Create your goals</h2>
    <AppHeader />
    <NoteEditor />
    <NoteList />
  </>
);
export default App;
