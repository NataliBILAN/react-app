import React, { Component } from 'react';
import s from './CommentEditor.module.css';

class CommentEditor extends Component {
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
    this.props.addComment(this.state.text);
    this.setState({ text: '' });
    // console.log(this.state);
    // console.log(this.props);
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <h4 className={s.title}>Leave a comment</h4>

        <form onSubmit={this.handleSubmit} className={s.form}>
          <textarea
            onChange={this.handleChange}
            value={text}
            className={s.input}
          />
          <button type="submit" className={s.button}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default CommentEditor;
