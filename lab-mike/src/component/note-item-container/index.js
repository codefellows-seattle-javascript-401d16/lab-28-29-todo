import React from 'react';

class NoteItemContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }




  render () {
    return (
      <div>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              <p>{item.content}</p>
              <button onClick={() => this.props.noteDelete(item)}>Delete</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default NoteItemContainer;
