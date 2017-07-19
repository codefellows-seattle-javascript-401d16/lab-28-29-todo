import React from 'react';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    let result = this.props.app.state.notes.filter(note => note.content !== e.currentTarget.textContent.split(' ')[0]);
    this.props.app.setState( state => ({
      notes: result})
    );
  }

  render(){
    console.log('notes', this.props.notes);
    return (
      <ul>
        {this.props.notes.map((item, i) =>
          <li key={i} onClick={this.handleClick}>
            {item.content}
            <button type='button'> - </button>
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem;
