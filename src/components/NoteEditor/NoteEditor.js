import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../ui/Button';

class NoteEditor extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <TextArea onChange={this.handleChange} value={text} required />
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 50%;
`;
const TextArea = styled.textarea`
  outline: transparent;
  background-color: transparent;
  border: solid 3px transparent;
  border: dashed 3px #ea95e0;
  min-height: 100px;
  font-family: 'Gochi Hand', cursive;
  font-size: 20px;
  padding: 20px;
  color: #494a4b;
  margin-bottom: 20px;
`;

export default NoteEditor;
