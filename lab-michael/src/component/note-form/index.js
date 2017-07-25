import React from 'react'

class NoteForm extends React.Component {
  constructor(props){
    super(props)
    let subject = props.note ? props.note.subject: ''
    let textContent = props.note ? props.note.textContent : ''

    this.state = {subject, textContent}

    
    this.handleChange = this.handleChange.bind(this)
    this.handleNoteAdd = this.handleNoteAdd.bind(this)
  }


  handleChange(e){
    this.setState({
    [e.target.name]: e.target.value,
    })
  }


  handleNoteAdd(e){
    e.preventDefault()
    this.props.handleNoteAdd(this.state)
  }


  render(){
    {console.log('NOTEEEEE', this.props.note);}
    return(
      <form onSubmit={this.handleNoteAdd}>
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
        <button className='add-button' type='submit'> {this.props.submitTitle} </button>
      </form>
    )
  }
}
export default NoteForm
