import './_navbar.scss';
import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render(){
    return (
      <header>
        <h1> Budget Tracker </h1>
        <nav>
          <ul>
            <Link to='/'> <li className="dash">Dashboard</li> </Link>
            <Link to='/about'> <li className="about">About</li> </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
