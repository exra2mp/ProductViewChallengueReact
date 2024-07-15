import React from 'react';
import '../stylessheet/ProductImage.css';
import imageProductDesktop from '../images/image-product-desktop.jpg';
import imageProductMobile from '../images/image-product-mobile.jpg';

const ProductImage = () => {
  return (
    <div className='image-container'>
        <picture>
            <source srcSet={imageProductDesktop} media='(min-width: 541px)'/>
            <source srcSet={imageProductMobile} media='(max-width: 540px)'/>
            <img src={imageProductDesktop} alt=' A view of a Chanel perfume' />
        </picture>
    </div>
  );
};

export default ProductImage