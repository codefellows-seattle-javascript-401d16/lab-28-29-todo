import './_navbar.scss';
import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  //no state needed
  render(){
    return(
      <header>
        <nav className='navbar'>
          <h1>Get it, Jot it, Good</h1>
          <ul>
            <li className='dash-link'><Link to='/'> Dashboard </Link></li>
            <li className='about-link'><Link to='/about'> About </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
