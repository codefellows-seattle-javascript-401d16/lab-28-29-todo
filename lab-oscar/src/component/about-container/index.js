import React from 'react';
import faker from 'faker';
class AboutContainer extends React.Component {
  render() {
    return (
      <div>
        <h1> About this Note App</h1>
        <p> {faker.lorem.sentence()}</p>
      </div>
    );
  }
}

export default AboutContainer;
