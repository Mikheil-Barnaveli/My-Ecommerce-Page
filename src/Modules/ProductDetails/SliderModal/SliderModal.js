import React, { useState } from "react";
import Modal from "react-modal";
import "./SliderModal.css";
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
Modal.setAppElement("#root");
function SliderModal() {
  const images = [product_1, product_2, product_3, product_4];

  const thumbnails = [
    product_thumbnail_1,
    product_thumbnail_2,
    product_thumbnail_3,
    product_thumbnail_4,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div className="slide-container">
        <img
          src={images[currentIndex]}
          alt=""
          className="mainImage"
          onClick={openModal}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <img
            src={iconClose}
            alt="Close"
            className="close-icon"
            onClick={closeModal}
          />
          <div className="arrow-div arrow-left" onClick={prevSlide}>
            <img src={iconPrev} alt="Previous"  />
          </div>

          <img src={images[currentIndex]} alt="" className="modalImage" />
          <div className="arrow-div arrow-right" onClick={nextSlide}>
            <img src={iconNext} alt="Previous" />
          </div>
        </Modal>
      </div>
      <div className="thumbnailContainer">
        {thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderModal;
