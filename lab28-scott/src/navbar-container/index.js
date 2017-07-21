import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
  //no state needed
  render(){
    return(
      <header>
        <h1>ToDo Notes App!</h1>
        <nav className='navbar'>
          <ul>
            <li><Link to='/'> Dashboard </Link></li>
            <li><Link to='/about'> About </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
