import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.note.id,
      editing: props.note.editing,
      content: props.note.content,
      completed: props.note.completed,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.removeNote(this.state.id);
  }

  render() {
    return (
      <ul>
        <li>
          <p>{this.state.content}</p>
          <button onClick={this.handleDelete}> Delete Note </button>
        </li>
      </ul>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    editing: PropTypes.bool,
    content: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleDelete: PropTypes.func,
  removeNote: PropTypes.func,
};

export default NoteItem;
