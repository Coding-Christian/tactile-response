import React from 'react';
import Header from './Header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: [],
      order: {}
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  addToCart(productId) {
    fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    }).then(response => response.json())
      .then(product => this.setState({ cart: this.state.cart.concat(product) }));
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(cart => this.setState({ cart }));
  }

  placeOrder(userInfo) {
    const view = { name: 'catalog', params: {} };
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    }).then(response => response.json())
      .then(order => this.setState({ view, cart: [], order }));
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    let viewElem;
    if (this.state.view.name === 'catalog') {
      viewElem = (<ProductList setView={this.setView}/>);
    } else if (this.state.view.name === 'details') {
      viewElem = (<ProductDetails params={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>);
    } else if (this.state.view.name === 'checkout') {
      const prices = this.state.cart.map(product => product.price);
      const totalPrice = prices.reduce((prod1, prod2) => prod1 + prod2);
      viewElem = (<CheckoutForm placeOrder={this.placeOrder} totalPrice={totalPrice}/>);
    } else {
      const prices = this.state.cart.map(product => product.price);
      const totalPrice = prices.reduce((prod1, prod2) => prod1 + prod2);
      viewElem = (<CartSummary setView={this.setView} products={this.state.cart} totalPrice={totalPrice}/>);
    }
    return (
      <div className='app'>
        <Header cartItemCount={this.state.cart.length} setView={this.setView} title='Tactile Response' />
        <div className='container'>{viewElem}</div>
      </div>
    );
  }
}

export default App;
