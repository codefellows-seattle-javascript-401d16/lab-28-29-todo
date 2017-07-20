import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log('e.currentTarget.value', e.currentTarget.value);
    let result = this.props.app.state.notes.filter(note => note.id !== e.parentTarget.value);
    this.props.app.setState( state => ({
      notes: result})
    );
  }

  render(){
    console.log('notes', this.props.notes);
    return (
      <ul>
        {this.props.notes.map((item, i) =>
          <li key={i} value={i} onClick={this.handleClick}>
            {item.content}
            <button type='button'> - </button>
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem;
