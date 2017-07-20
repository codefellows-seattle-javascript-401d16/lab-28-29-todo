import React from 'react';

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('parparval', e.currentTarget.parentElement.getAttribute('value'));
    this.props.handleNoteUpdate(this.state, e.currentTarget.parentElement.getAttribute('value'));
    this.setState({
      content: '',
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'> Update </button>

      </form>
    );
  }
}

export default NoteUpdateForm;
