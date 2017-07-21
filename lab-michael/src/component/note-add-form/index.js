import React from 'react'

class NoteAddForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subject: '',
      textContent:'',
    }
    // date: new Date(),

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }


  handleChange(e){
    this.setState({
    [e.target.name]: e.target.value,
    })
  }


  handleAdd(e){
    e.preventDefault()
    this.props.handleNoteAdd(this.state)
  }


  render(){
    return(
      <form onSubmit={this.handleAdd}>
        <input
          name='subject'
          type='text'
          value={this.state.subject}
          placeholder='Note Subject'
          onChange={this.handleChange}
        />

        <input
          name='textContent'
          type='textarea'
          value={this.state.textContent}
          placeholder='Content'
          onChange={this.handleChange}
        />
        <button className='add-button' type='Add Note'> Add Note </button>
      </form>
    )
  }
}
export default NoteAddForm
