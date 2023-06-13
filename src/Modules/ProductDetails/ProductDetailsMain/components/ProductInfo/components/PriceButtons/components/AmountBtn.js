import React from 'react'
import './AmountBtn.css'
import minus from './../../../../../../../../assets/images/icon-minus.svg'
import plus from './../../../../../../../../assets/images/icon-plus.svg'
function AmountBtn(props) {
  return (
    <div>
      <div className="amount-btns">
        <img src={minus} alt="minus" onClick={() => props.handleChangeQuantity('-')} className='quantity-btn'/>
        <p className="quantity">{props.myObject.quantity}</p>
        <img src={plus} alt="plus" onClick={() => props.handleChangeQuantity('+')} className='quantity-btn'/>
      </div>
    </div>
  )
}

export default AmountBtn
