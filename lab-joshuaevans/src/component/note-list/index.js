import React from 'react'
import NoteContainer from '../note-container'
import NoteCreateForm from '../note-create-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

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
            <div className='note-list'>
            <List>
            <ListItem
              primaryText={item.content}
              style={{border: '1px solid rgb(217, 217, 217)', width: '100%', margin: '0 auto'}}
              />
              <FloatingActionButton
                mini={false}
                disabled={false}
                backgroundColor='lightgrey'
                style={{width: 'auto'}}
                onClick={() => this.props.noteRemove(item)}
                >
              <ContentClear viewBox='0 10 24 24'/>
              </FloatingActionButton>
            </List>
            <Divider />
            </div>

          </MuiThemeProvider>

          <NoteCreateForm
            note = {item}
            submitTitle='Update Note'
            placeHolder='update your note'
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
