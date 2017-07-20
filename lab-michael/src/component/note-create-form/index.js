import React from 'react'

class NoteCreateForm extends React.component {
  constructor(props){
    super(props)
    this.state = {
      subject: '',
      textContent:'',
      date: new Date(),
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    [e.target.name] = e.target.value
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.handleNoteCreate(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSumit}>
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
          value={this.state.subject}
          placeholder='Note Subject'
          onChange={this.handleChange}
        />

        <button type='submit'> Create Note </button>
      </form>
    )
  }
}
let div = document.createElement('div')
document.body.appendChild(div)
ReactDom.render(</app >, div)
