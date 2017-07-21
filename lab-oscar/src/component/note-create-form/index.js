import './_note-create-form.scss';

import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    console.log('note', props.note);
    let content = props.note ? props.note.content : '';

    this.state = {
      content: content
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name, value, type} = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render(){
    return (
      <div className='input-form'>
        <form onSubmit={this.handleSubmit} >
          <input
            name="content"
            type="text"
            placeholder='What needs to done?'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.submitName}</button>
        </form>
      </div>
    );
  }
}

export default NoteCreateForm;
