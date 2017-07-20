import React from 'react'
import NoteContainer from '../note-container'
import NoteCreateForm from '../note-create-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

class NoteList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        {this.props.notes.map((item, n) =>
          <div key={n}>
          <MuiThemeProvider>
            <RaisedButton className='buttons' onClick={() => this.props.noteRemove(item)} label='Remove Note' labelStyle={{fontSize: '2em'}} style={{verticalAlign: 'middle', lineHeight: '36px', width: '20%', listStyleType: 'none', padding: '0'}} />
          </MuiThemeProvider>

          <MuiThemeProvider>
          <div className='note-list'>
            <List>
            <ListItem primaryText={item.content} style={{border: '1px solid rgb(217, 217, 217)', width: '50%', margin: '0 auto'}} rightAvatar={<Avatar>X</Avatar>}/>

            <Divider />
            </List>
          </div>
          </MuiThemeProvider>

          <NoteCreateForm
            note = {item}
            submitTitle='Update Note'
                handleSubmit={(note) => {
                  note.id = item.id
                  this.props.noteEdit(note)
                }} />
          </div>
        )}
      </div>
    )
  }
}

export default NoteList
