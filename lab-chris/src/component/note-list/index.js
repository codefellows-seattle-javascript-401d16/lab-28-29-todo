import './note-list.scss';
import React from 'react';
import NoteItem from '../note-item/';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  handleUpdate(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }

  render(){
    return(
      <div className='note-list'>
        <NoteItem 
          app={this.props.app}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default NoteList;
