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

  handleChange(event) {
    const field = event.target.id;
    const value = event.target.value;
    if (field === 'name') {
      this.setState({ name: value });
    } else if (field === 'address') {
      this.setState({ address: value });
    } else {
      this.setState({ creditCard: value });
    }
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
              <label htmlFor="name">Name</label>
              <input type="text" id='name'/>
            </div>
            <div className="form-group">
              <label htmlFor="creditCard">Credit Card</label>
              <input type="text" id='creditCard'/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Name</label>
              <input type="textarea" id='address'/>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
