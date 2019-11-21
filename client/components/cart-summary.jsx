import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  let productElems;
  if (!props.products.length) {
    productElems = (<h4>Your Cart is Empty.</h4>);
  } else {
    productElems = props.products.map(product =>
      <CartSummaryItem key={product.name} product={product}/>
    );
  }
  return (
    <div className='card'>
      <div className='card-body d-flex flex-column justify-content-around'>
        <button type='button' className='btn btn-dark'>
          <i className="fas fa-chevron-left mr-2"/>
          Back to Catalog
        </button>
        <h2>Your Cart</h2>
        {productElems}
      </div>
    </div>
  );
}

export default CartSummary;
