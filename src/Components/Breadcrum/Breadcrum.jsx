import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/arrow_icon.png';

const Breadcrum = (props) => {  // Add props as a parameter
  const { product } = props;
  
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  );
}

export default Breadcrum;