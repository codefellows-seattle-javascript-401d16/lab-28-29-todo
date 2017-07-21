import './_note-create-form.scss';

import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    console.log('note', props.updateClass);
    let content = props.note ? props.note.content : '';

    this.state = {
      content: content,
      error:null,
      errorClose: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorBox = this.handleErrorBox.bind(this);
    this.handleCloseErrorBox = this.handleCloseErrorBox.bind(this);
  }

  handleErrorBox(){
    const errorState = this.state.errorClose;
    this.setState({errorClose: !errorState});
  }

  handleCloseErrorBox(){
    this.setState({error: null});
  }
  handleChange(e){
    let {name, value, type} = e.target;
    this.setState({
      [name]: value,
      error: null,
    });
  }

  handleSubmit(event) {
    console.log('testing validation', event.target);
    event.preventDefault();
    {this.state.content === '' ? this.setState(
      {error: 'Please enter some text'})
      :
      this.props.handleSubmit(this.state);}

  }
  render(){
    return (
      <div className={this.props.updateClass ? this.props.updateClass : 'input-form'}>
        <form onSubmit={this.handleSubmit} >
          {this.state.error ?
            <div className='error-on-submit'>
              <div>
                {this.state.error}
                <a href="#"
                  onClick={this.handleCloseErrorBox}
                  onMouseOver={this.handleErrorBox}
                  onMouseOut={this.handleErrorBox}
                  className={this.state.errorClose ? 'active-error-close-box' : 'error-close-box'}
                >X</a>
              </div>
            </div>
            :
            null
          }

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
