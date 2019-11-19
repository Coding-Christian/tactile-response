import React from 'react';

function Header(props) {
  return (
    <nav className='navbar navbar-dark bg-dark text-light sticky-top'>
      <a href='#' className='navbar-brand'>
        <i className='fas fa-dollar-sign mr-1'/>
        {props.title}
      </a>
    </nav>
  );
}

export default Header;
