import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

      <ul>
        {this.props.notes.map((item, i) =>
          <li key={i}>
        {item.content}
        </li>
      )}
      </ul>
    );
  }
}

export default NoteItem;
