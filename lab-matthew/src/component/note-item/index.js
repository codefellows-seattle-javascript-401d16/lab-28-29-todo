import React from 'react';
import NoteCreateForm from '../note-create-form';

let renderIf = (t, c) => t ? c : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };

  }

  // handleView(e){
  //   this.state.defaultView === true ?
  //   this.setState(state => ({
  //     defaultView: false,
  //     editView: true,
  //   }))
  //   :
  //   this.setState(state => ({
  //     defaultView: true,
  //     editView: false,
  //   }));
  // }


  render() {
    {console.log('this.props', this.props);}
    let {note} = this.props;
    return (

      <li onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
        {renderIf(!this.state.editing,
          <div>
            <p> title: {note.title} </p>
            <p> content: {note.content} </p>
            <button onClick = {() => this.props.noteRemove(note)}>
              -
            </button>
          </div>
        )}

        {renderIf(this.state.editing,
          <NoteCreateForm
            note={note}
            handleSubmit={(data) => {
              {console.log('DATA', data);}
              data.id = note.id;
              this.props.noteUpdate(data);
            }}
            />
          )}
      </li>

    );
  }
}

export default NoteItem;
