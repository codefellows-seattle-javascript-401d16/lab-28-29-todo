import './navbar-style.scss';
import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return(
      <header className='nav-bar'>
        <main>
          <h1>To Do List</h1>
          <nav>
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/'>Dashboard</Link></li>
            </ul>
          </nav>
        </main>
      </header>
    );
  }
}

export default NavBar;
