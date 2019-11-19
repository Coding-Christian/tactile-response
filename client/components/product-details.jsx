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
    return null;
  }
}

export default ProductDetails;
