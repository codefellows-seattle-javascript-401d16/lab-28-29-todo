import React from 'react';

class Modal extends React.Component{
  //no state needed
  render(){
    console.log('this.propsMODAL', this.props);
    return(
      <div className='modal'>
        <main>
          {this.props.children}
        </main>
        <button onClick={this.props.close}> Close Message </button>
      </div>
    );
  }
}

export default Modal;
