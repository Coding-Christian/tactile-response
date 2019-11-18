import React from 'react';

function ProductListItem(props) {
  return (
    <div>
      <img src={props.image} alt={props.name}/>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <p>{props.shortDescription}</p>
    </div>
  );
}

export default ProductListItem;
