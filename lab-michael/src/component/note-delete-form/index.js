import React from 'react'

class NoteDeleteForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subject: '',
      textContent:'',
    }
    // date: new Date(),

    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }


  handleChange(e){
    this.setState({
    [e.target.name]: e.target.value,
    })
  }


  handleDelete(e){
    e.preventDefault()
      console.log('this.props.app.notes',this.props.app.notes)
      // this.props.app.setState((state)=> ({
      //   state.notes.map(note=>{
      //     console.log(note);
      //   })
      // }))
  }


  render(){
    return(
      <form onSubmit={this.handleDelete}>
        <button className='delete-button' type='Delete Note'> Delete This Note </button>
      </form>
    )
  }
}

export default NoteDeleteForm
