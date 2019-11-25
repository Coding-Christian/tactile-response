import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };
    this.setView = props.setView;
    this.totalPrice = props.totalPrice;
  }

  render() {
    return (
      <div className='card my-4'>
        <div className='card-body d-flex flex-column justify-content-around'>
          <div style={{ cursor: 'pointer' }} onClick={this.setView}>
            <i className="fas fa-chevron-left mr-2"/>
            <h6 className='d-inline'>Back to Catalog</h6>
          </div>
          <h2 className="border-bottom my-2 pb-2">Your Total: ${this.totalPrice}</h2>
          <form>
            <div className="form-group">
              <label htmlFor="customerName">Name</label>
              <input type="text" id='customerName'/>
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Credit Card</label>
              <input type="text" id='customerName'/>
            </div>
            <div className="form-group">
              <label htmlFor="customerAddress">Name</label>
              <input type="textarea" id='customerAddress'/>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
