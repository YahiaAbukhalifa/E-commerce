import React, { useState, useEffect } from 'react';
import {FaShoppingCart } from 'react-icons/fa'; 
import { BsArrowLeftRight } from 'react-icons/bs'; 
import logo from "../../img/logo.jpg";
import "./Header.css"

const Header = ({ setActiveLinkProp, category }) => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    setActiveLink(hash);
    setActiveLinkProp(hash);
  }, [setActiveLinkProp]);

  return (
    <div className="large-screens">
      <header>
        <button className={'active'}>اشتري الأن</button>
        <nav id='nav'>
          <FaShoppingCart />
          <a href="#/" className={activeLink === '#/' ? 'active' : ''}>الرئيسية</a>
          <a href="#/offers" className={activeLink === '#/offers' ? 'active' : ''}>العروض و الخصومات</a>
          <div className="dropdown">
            <a href="#/products" className={activeLink.includes('#/products') ? 'active dropbtn' : 'dropbtn'}>المنتجات</a>
            <div className="dropdown-content">
              <a href="#/products?category=Men" >رجالي</a>
              <a href="#/products?category=Women">حريمي</a>
              <a href="#/products?category=Baby" >أطفال</a>
            </div>
          </div>
          <a href="">مركز الشكاوي</a>
        </nav>
        <img src={logo} alt="" className="logo" width="50px" height="50px"/>
      </header>
    </div>
  );
};


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="nav" className='nav'>
      <div className="navWrapper">
        <a href="/" id="logo">Townteam</a>
        <div className="right">
          <div id="nav-icon" onClick={handleMenuClick}>
            <BsArrowLeftRight />
            <BsArrowLeftRight />
            <BsArrowLeftRight />
          </div>
          <div className={`overlay ${isMenuOpen ? 'open' : ''}`} id="overlay">
            <div className="overlayContent">
              <a href="/" className="overlay-a">الرئيسية</a>
              <a href="/#/products" className="overlay-a">اشتري الان</a>
              <a href="/" className="overlay-a">تسجيل </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MainHeader = ({ category }) => {
  const [activeLink, setActiveLink] = useState('');
  return (
    <>
      <Header activeLinkProp={activeLink} setActiveLinkProp={setActiveLink} category={category} />
      <Nav />
    </>
  );
};


export default MainHeader;
