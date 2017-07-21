import React from 'react'
import uuid from 'uuid/v1';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props)
    let content = ''

    this.state = {content}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
      <MuiThemeProvider>
        <TextField
          name='content'
          type='text'
          onChange={this.handleChange}
          value={this.state.content}
          style={{width: '100%'}}
          />
      </MuiThemeProvider><br/>
      <MuiThemeProvider>
          <RaisedButton type='submit' className='buttons' label={this.props.submitTitle} labelStyle={{fontSize: '2em'}} style={{verticalAlign: 'middle', lineHeight: '36px', width: '20%'}} />
      </MuiThemeProvider><br />
      </form>
    )
  }
}

export default NoteCreateForm
