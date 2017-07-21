import React from 'react';

import Navbar from '../navbar';

class AboutContainer extends React.Component {
  render(){
    return (
      <div className='about-container'>
      <Navbar />
        <h1> ToDo App </h1>
        <p>This is an app that lets you create update and delete notes.</p>
      </div>
    );
  }
}

export default AboutContainer;
