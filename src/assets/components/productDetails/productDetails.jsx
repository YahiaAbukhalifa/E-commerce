import React, { useEffect, useState } from 'react';
import './productDetails.css';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import MainHeader from '../Header/Header';
import Footer from '../footer/Footer';
import { clothesData } from '../../DataFile';

function ProductDetailes() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    const idIndex = hash.indexOf('=') + 1;
    const productId = hash.slice(idIndex);
    const foundProduct = clothesData.find(item => item.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, []);
  

  return (
    <>
      <MainHeader/>
      {product && (
        <div className="ProductDetailes">
          <div className="images-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <span>
              <p className="after-offer">{product.price} LE</p>
              <p className="before-offer">{product.pastprice} LE</p>
            </span>
            <div className="rating">
              {[...Array(Number(product.rating))].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <p>{product.productDescription}</p>
            <button>Add to cart <FaShoppingCart /></button>
            <button>Buy now</button>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default ProductDetailes;
