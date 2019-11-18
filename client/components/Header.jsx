import React from 'react';

function Header(props) {
  return (
    <h1 className='row border-bottom'>{props.title}</h1>
  );
}

export default Header;
