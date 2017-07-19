import React from 'react';
import uuid from 'uuid/v1';

class PortalContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>You are inside portal-container</h1>
      </div>
    );
  }
}

export default PortalContainer;
