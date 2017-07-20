import React from 'react';

import NoteItem from '../note-item';

let renderIf = (test, component) => test ? component : undefined;

class NoteListContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log('hit note list');
  }


  render() {
    let notes = this.props.app.notes || [];
    return (
      <div className='note-list-container'>
        <ul>
          {renderIf(notes.length === 0, <li> <NoteItem app={this.props.app} /></li>)}
          {renderIf(notes.length > 0,
            notes.map((item, i) =>
              <li key={i}>
                <NoteItem app={this.props.app} content={this.props.content}/>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default NoteListContainer;
