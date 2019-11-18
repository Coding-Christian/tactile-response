import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    const products = this.state.products.map(product =>
      <ProductListItem
        key={product.id}
        name={product.name}
        image={product.image}
        price={product.price}
        shortDescription={product.shortDescription}
        longDescription={product.longDescription}
      />
    );
    return (<div className="row">{products}</div>);
  }
}

export default ProductList;
