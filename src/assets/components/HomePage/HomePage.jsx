import React from 'react';
import "./HomePage.css";
import mainImg from "../../img/main.png"
import MainHeader from '../Header/Header';
import ClothesContainer from '../clothesSection/clothesSection';
import Footer from '../footer/Footer';
import BackToTopButton from '../backToTop/backToTop';
function HomePage() {
  return (
    <>
        <MainHeader/>
        <div className='main'>
            <div className='main-img'>
                <img src={mainImg} alt=""/>
            </div>
            <div className='main-info'>
                <h1>احصل على افضل الملابس واقل الاسعار</h1>
                <p>الموقع الرسمي</p>
                <a className='main-btn' style={{color: 'white'}}>تصفح منتجاتنا</a>
            </div>
        </div>
        <ClothesContainer/>
        <BackToTopButton/>
        <Footer/>
    </>
  )
}

export default HomePage;