import React from 'react';

class Modal extends React.Component {
  render(){
    return (
      <div className='modal'>
        <main>
          {this.prop.children}
        </main>
      </div>
    )
  }
}

export default Modal
