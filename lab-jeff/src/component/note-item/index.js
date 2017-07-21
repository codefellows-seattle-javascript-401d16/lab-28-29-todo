import React from 'react';

class NoteItem extends React.Component {

  render() {
    return (

      <li key={this.props.keyVal}>
        <p>{this.props.note.content}
          <button onClick={() => this.props.handleDelete(this.props.note)}>
          delete
          </button>
        </p>
      </li>
    );
  }
}

export default NoteItem;
