import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.setView = props.setView;
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let products = [];
    if (this.state.products.length !== 0) {
      products = this.state.products.map(product =>
        <ProductListItem
          key={product.productId}
          productId={product.productId}
          name={product.name}
          image={product.image}
          price={product.price}
          shortDescription={product.shortDescription}
          setView={this.setView}
        />
      );
    }
    return (<div className='row'>{products}</div>);
  }
}

export default ProductList;
