import React from 'react';

function CartSummaryItem(props) {
  const imgStyle = { 'max-height': '150px', 'object-fit': 'contain' };
  const price = (props.product.price / 100).toFixed(2);
  return (
    <div className="row mt-2">
      <img src={props.product.image} alt={props.product.name} style={imgStyle} className='col-5'/>
      <div className="col-7 d-flex flex-column justify-content-around">
        <h4 className='modal-title'>{props.product.name}</h4>
        <h5 className='text-muted'>${price}</h5>
        <h6>{props.product.shortDescription}</h6>
      </div>
    </div>
  );
}

export default CartSummaryItem;
