import React from 'react';
import uuid from 'uuid/v1';

class NoteItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: '',
    };

    console.log('hit note item');
  }

  componentDidMount(){
    console.log('did mount');
    this.setState({
      id: uuid(),
      content: this.props.content,
    });
    console.log(this.props.app);
    this.props.app.setState( state => ({
      notes: [...state.notes, this.state],
    }));
  }

  render() {
    return (
      <div className='note-item'>
        <p>
          {this.state.content}
        </p>
      </div>
    );
  }
}

export default NoteItem;
