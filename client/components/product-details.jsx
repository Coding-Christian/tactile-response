import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.params = props.params;
    this.setView = props.setView;
  }

  getProductDetails(productId) {
    fetch(`/api/products?productId=${productId}`)
      .then(response => response.json())
      .then(product => this.setState({ product: product[0] }));
  }

  componentDidMount() {
    this.getProductDetails(this.params.productId);
  }

  render() {
    const product = this.state.product;
    if (product) {
      const setView = () => { this.setView('catalog', {}); };
      const imgStyle = { 'max-height': '250px', 'object-fit': 'contain' };
      const price = (product.price / 100).toFixed(2);
      return (
        <div className="modal d-block position-relative mt-4">
          <div className="modal-content">
            <div className="modal-header">
              <button type='button' onClick={setView} className='btn btn-dark'>
                <i className="fas fa-chevron-left mr-2"/>
                Back to Catalog
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <img src={product.image} alt={product.name} style={imgStyle} className='col-5'/>
                  <div className="col-7">
                    <h2 className='modal-title'>{product.name}</h2>
                    <h3 className='text-muted'>${price}</h3>
                    <h6>{product.shortDescription}</h6>
                  </div>
                </div>
                <p className='mt-4'>{product.longDescription}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default ProductDetails;
