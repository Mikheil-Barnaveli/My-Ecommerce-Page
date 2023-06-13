import React from 'react'
import cart from '../../../../../assets/images/icon-cart.svg'
import './Cart.css'

function Cart(props) {
  return (
    <div className='cart-div' onClick={props.handleCart}>
        <img src={cart}></img>
    </div>
  )
}

export default Cart