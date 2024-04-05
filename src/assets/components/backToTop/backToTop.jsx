import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import "./backToTop.css"
function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    const initialPosition = window.pageYOffset;
    const step = () => {
      if (window.pageYOffset > 0) {
        window.scroll(0, window.pageYOffset - 50);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top-button ${showButton ? 'show' : ''}`}
      onClick={handleScrollToTop}
    >
      <FaArrowUp className="button-text" /> {/* Use the FaArrowUp icon directly */}
    </button>
  );
}

export default BackToTopButton;
