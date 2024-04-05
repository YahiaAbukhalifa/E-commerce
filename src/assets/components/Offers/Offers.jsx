import React from 'react'
import "./Offers.css"
import Footer from '../footer/Footer'
import MainHeader from '../Header/Header'
function Offers() {
  return (
    <>
        <MainHeader/>
        <div className='offers'>
        <h1>ليس هناك عروض متاحة حاليا</h1>
        </div>
        <Footer/>
    </>
  )
}

export default Offers