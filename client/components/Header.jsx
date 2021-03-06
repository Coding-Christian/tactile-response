import React from 'react';

function Header(props) {
  const setView = () => { props.setView('cart', {}); };
  return (
    <nav className='navbar navbar-dark bg-dark text-light sticky-top justify-content-between'>
      <a href='' className='navbar-brand'>
        <i className='fas fa-dollar-sign mr-1'/>
        {props.title}
      </a>
      <div onClick={setView} style={{ cursor: 'pointer' }} className='navbar-brand'>
        {props.cartItemCount}
        <i className="fas fa-shopping-cart ml-1"/>
      </div>
    </nav>
  );
}

export default Header;
