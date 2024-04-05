import React, { useEffect, useState } from "react";
import "./products.css";
import { clothesData } from "../../DataFile";
import { FaEye, FaShoppingCart, FaStar } from "react-icons/fa";
import Footer from "../footer/Footer";
import BackToTopButton from "../backToTop/backToTop";
import MainHeader from "../Header/Header";


const ProductCard = ({ product }) => {
  const { name, image, rating, size,id} = product;

  return (
    <div className="product-card">
      <div className="product-actions">
        <a href={`#/productinfo?id=${encodeURIComponent(id)}`}>
          <FaEye />
        </a>
        <FaShoppingCart />
      </div>
      <img src={image} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-rating">
        <div className="rating">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </div>
      <div className="product-size">
        <button>{size}</button>
      </div>
    </div>
  );
};

const FilteredProducts = ({ category, size, type }) => {
  const filteredProducts = clothesData.filter((product) => {
    let match = true;
    if (category && product.category !== category) {
      match = false;
    }
    if (size && product.size !== size) {
      match = false;
    }
    if (type && product.type !== type) {
      match = false;
    }
    return match;
  });

  return (
    <div className="products">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
};

function Products() {
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
        <MainHeader category={category}/>
        <div className="product-filter">
            <div className="filter-container">
            <div className="filter-group">
                <label>Category:</label>
                <div>
                <label>
                    <input
                    type="radio"
                    name="category"
                    value=""
                    checked={category === ""}
                    onChange={handleCategoryChange}
                    />
                    <span>All</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="category"
                    value="Men"
                    checked={category === "Men"}
                    onChange={handleCategoryChange}
                    />
                    <span>Men</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="category"
                    value="Women"
                    checked={category === "Women"}
                    onChange={handleCategoryChange}
                    />
                    <span>Women</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="category"
                    value="Baby"
                    checked={category === "Baby"}
                    onChange={handleCategoryChange}
                    />
                    <span>Baby</span>
                </label>
                <br />
                </div>
            </div>
            <div className="filter-group">
                <label>Size:</label>
                <div>
                <label>
                    <input
                    type="radio"
                    name="size"
                    value=""
                    checked={size === ""}
                    onChange={handleSizeChange}
                    />
                    <span>All</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="size"
                    value="S"
                    checked={size === "S"}
                    onChange={handleSizeChange}
                    />
                    <span>S</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="size"
                    value="M"
                    checked={size === "M"}
                    onChange={handleSizeChange}
                    />
                    <span>M</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="size"
                    value="L"
                    checked={size === "L"}
                    onChange={handleSizeChange}
                    />
                    <span>L</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="size"
                    value="0-3 months"
                    checked={size === "0-3 months"}
                    onChange={handleSizeChange}
                    />
                    <span>0-3 months</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="size"
                    value="3-6 months"
                    checked={size === "3-6 months"}
                    onChange={handleSizeChange}
                    />
                    <span>3-6 months</span>
                </label>
                <br />
                </div>
            </div>
            <div className="filter-group">
                <label>Type:</label>
                <div>
                <label>
                    <input
                    type="radio"
                    name="type"
                    value=""
                    checked={type === ""}
                    onChange={handleTypeChange}
                    />
                    <span>All</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="type"
                    value="T-Shirt"
                    checked={type === "T-Shirt"}
                    onChange={handleTypeChange}
                    />
                    <span>T-Shirt</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="type"
                    value="short"
                    checked={type === "short"}
                    onChange={handleTypeChange}
                    />
                    <span>short</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="type"
                    value="Tank Top"
                    checked={type === "Tank Top"}
                    onChange={handleTypeChange}
                    />
                    <span>Tank Top</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="type"
                    value="Onesie"
                    checked={type === "Onesie"}
                    onChange={handleTypeChange}
                    />
                    <span>Onesie</span>
                </label>
                <br />
                <label>
                    <input
                    type="radio"
                    name="type"
                    value="Dress"
                    checked={type === "Dress"}
                    onChange={handleTypeChange}
                    />
                    <span>Dress</span>
                </label>
                <br />
                </div>
            </div>
            </div>
        <FilteredProducts category={category} size={size} type={type} />
      </div>
      <Footer/>
      <BackToTopButton/>
    </>
  );
}

export default Products;
