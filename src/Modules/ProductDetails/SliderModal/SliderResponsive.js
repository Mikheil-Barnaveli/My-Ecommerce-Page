import React, { useState } from "react";
import "./SliderResponsive.css";
import product_1 from "./../../../assets/images/image-product-1.jpg";
import product_2 from "./../../../assets/images/image-product-2.jpg";
import product_3 from "./../../../assets/images/image-product-3.jpg";
import product_4 from "./../../../assets/images/image-product-4.jpg";
import product_thumbnail_1 from "./../../../assets/images/image-product-1-thumbnail.jpg";
import product_thumbnail_2 from "./../../../assets/images/image-product-2-thumbnail.jpg";
import product_thumbnail_3 from "./../../../assets/images/image-product-3-thumbnail.jpg";
import product_thumbnail_4 from "./../../../assets/images/image-product-4-thumbnail.jpg";
import iconPrev from "./../../../assets/images/icon-previous.svg";
import iconNext from "./../../../assets/images/icon-next.svg";
import iconClose from "./../../../assets/images/icon-close.svg";

function SliderResponsive() {
  const images = [product_1, product_2, product_3, product_4];

  const thumbnails = [
    product_thumbnail_1,
    product_thumbnail_2,
    product_thumbnail_3,
    product_thumbnail_4,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{backgroundImage:`url(${images[currentIndex]})`}} id="slider-responsive">
      <div id="responsive-slider-arrow-div-left" onClick={prevSlide} className="responsive-slider-arrow-div">
        <img src={iconPrev} alt="Previous" />
      </div>

      <div id="responsive-slider-arrow-div-right" onClick={nextSlide} className="responsive-slider-arrow-div">
        <img src={iconNext} alt="Previous" />
      </div>
    </div>
  );
}

export default SliderResponsive;
