import React from 'react';
//E
class Modal extends React.Component {
  render() {
    return (
      <div className='modal'>
        <button onClick={this.props.close}> Close </button>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Modal;
