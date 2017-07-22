import React from 'react';
import Navbar from '../navbar';

class AboutContainer extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <Navbar />
        <h2> About ToDo App </h2>
        <p> ToDo App is an app built with React to let you create and delete to do lists. </p>
      </div>
    );
  }
}

export default AboutContainer;
