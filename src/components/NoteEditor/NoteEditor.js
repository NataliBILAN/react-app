import React, { Component } from 'react';

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
    // console.log(this.state);
    // console.log(this.props);
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange} value={text} />
        <button type="submit">Save</button>
      </form>
    );
  }
}
export default NoteEditor;
