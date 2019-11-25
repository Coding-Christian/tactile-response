import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const setViewCatalog = () => { props.setView('catalog', {}); };
  const setViewCheckout = () => { props.setView('checkout', {}); };
  const totalPrice = (props.totalPrice / 100).toFixed(2);
  let productElems;
  if (!props.products.length) {
    productElems = (<h4>Your Cart is Empty.</h4>);
  } else {
    productElems = props.products.map(product =>
      <CartSummaryItem key={product.cartItemId} product={product}/>
    );
  }
  return (
    <div className='card my-4'>
      <div className='card-body d-flex flex-column justify-content-around'>
        <div style={{ cursor: 'pointer' }} onClick={setViewCatalog}>
          <i className="fas fa-chevron-left mr-2"/>
          <h6 className='d-inline'>Back to Catalog</h6>
        </div>
        <h2 className="border-bottom my-2 pb-2">Your Cart</h2>
        {productElems}
        <h2 className="border-top mt-2 pt-2">Total: ${totalPrice}</h2>
        <button type='button' onClick={setViewCheckout}>To Checkout</button>
      </div>
    </div>
  );
}

export default CartSummary;
