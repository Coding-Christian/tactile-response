import React from 'react';

function ProductListItem(props) {
  const setView = () => { props.setView('details', { productId: props.productId }); };
  const imgStyle = { maxHeight: '200px', objectFit: 'contain' };
  const price = (props.price / 100).toFixed(2);
  return (
    <div className='col-12 col-md-6 col-lg-4 my-3 d-flex align-items-stretch'>
      <div onClick={setView} style={{ cursor: 'pointer' }} className='card'>
        <img src={props.image} alt={props.name} style={imgStyle} className='card-img-top'/>
        <div className='card-body d-flex flex-column justify-content-around'>
          <h4 className='card-title p-2'>{props.name}</h4>
          <h6 className='card-subtitle text-muted p-2'>${price}</h6>
          <p className='card-text p-2'>{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
