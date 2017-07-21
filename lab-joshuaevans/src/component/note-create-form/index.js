import React from 'react'
import uuid from 'uuid/v1';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
          hintText={this.props.placeHolder}
          onChange={this.handleChange}
          value={this.state.content}
          style={{width: '100%'}}
          />
      </MuiThemeProvider><br/>
      <MuiThemeProvider>
      <FloatingActionButton
        mini={false}
        disabled={false}
        disabledColor={true}
        type='submit'
        backgroundColor='lightgrey'
        style={{width: 'auto'}}>
          <ContentAdd viewBox='0 10 24 24'/>
        </FloatingActionButton>
      </MuiThemeProvider><br />
      </form>
    )
  }
}

export default NoteCreateForm
