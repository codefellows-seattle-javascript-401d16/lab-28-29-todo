import React from 'react'

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleNoteCreate(this.state)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          placeholder="type a note here"
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <label for="editing">Editing</label>
        <input
          name='editing'
          type='checkbox'
          value={this.state.editing}
          onChange={this.handleChange}
          />

        <label for="completed">Completed</label>
        <input
          name='completed'
          type='checkbox'
          value={this.state.completed}
          onChange={this.handleChange}
          />

        <button type='submit'> + </button>

      </form>
    );
  }
}

export default NoteCreateForm
