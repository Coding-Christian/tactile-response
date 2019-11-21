import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const setView = () => { props.setView('catalog', {}); };
  let productElems;
  if (!props.products.length) {
    productElems = (<h4>Your Cart is Empty.</h4>);
  } else {
    productElems = props.products.map(product =>
      <CartSummaryItem key={product.name} product={product}/>
    );
  }
  return (
    <div className='card my-4'>
      <div className='card-body d-flex flex-column justify-content-around'>
        <div style={{ cursor: 'pointer' }} onClick={setView}>
          <i className="fas fa-chevron-left mr-2"/>
          <h6 className='d-inline'>Back to Catalog</h6>
        </div>
        <h2 className="border-bottom mb-2">Your Cart</h2>
        {productElems}
      </div>
    </div>
  );
}

export default CartSummary;
