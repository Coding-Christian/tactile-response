import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  getProductDetails(productId) {
    fetch(`/api/products?productId=${productId}`)
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  componentDidMount() {
    this.getProductDetails();
  }

  render() {
    const product = this.state.product;
    if (product) {
      return (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className='modal-title'>{product.name}</h1>
              <button type='button' data-dismiss='modal'>Back to Catalog</button>
            </div>
            <div className="modal-body">
              <img src={product.image} alt={product.name}/>
              <h3>{product.price}</h3>
              <h6>{product.shortDescription}</h6>
              <p>{product.longDescription}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
