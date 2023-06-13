import React from 'react'
import './AddToCart.css'
import cart from './../../../../../../../../assets/images/addToCart.png'
function AddToCart({handleAddItem}) {
  return (
    <div className="add-to-cart" onClick={handleAddItem}>
        <div className="cart-icon">
            <img src={cart} alt="cart" />
            <p className='add-to-cart-txt'>Add to Cart</p>
        </div>
    </div>
  )
}

export default AddToCart
