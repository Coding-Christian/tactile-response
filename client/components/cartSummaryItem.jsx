import React from 'react';

function CartSummaryItem(props) {
  const imgStyle = { 'max-height': '250px', 'object-fit': 'contain' };
  const price = (props.product.price / 100).toFixed(2);
  return (
    <div className="row">
      <img src={props.product.image} alt={props.product.name} style={imgStyle} className='col-5'/>
      <div className="col-7">
        <h2 className='modal-title'>{props.product.name}</h2>
        <h3 className='text-muted'>${price}</h3>
        <h6>{props.product.shortDescription}</h6>
      </div>
    </div>
  );
}

export default CartSummaryItem;
