import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.placeOrder = props.placeOrder;
    this.totalPrice = props.totalPrice;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.id;
    const value = event.target.value;
    if (field === 'name') {
      this.setState({ name: value });
    } else if (field === 'address') {
      this.setState({ shippingAddress: value });
    } else {
      this.setState({ creditCard: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const userInfo = {};
    Object.assign(userInfo, this.state);
    this.placeOrder(userInfo);
  }

  render() {
    return (
      <div className='card my-4'>
        <div className='card-body d-flex flex-column justify-content-around'>
          <h2 className="border-bottom my-2 pb-2">Your Total: ${this.totalPrice}</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" onChange={this.handleChange} id='name'/>
            </div>
            <div className="form-group">
              <label htmlFor="creditCard">Credit Card</label>
              <input type="text" onChange={this.handleChange} id='creditCard'/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id='address' onChange={this.handleChange}/>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
