import React from 'react'
import './PriceDiscount.css'
function PriceDiscount({discount}) {
  return (
    <div id='discount-div'>
      <p className="price-discount">{discount}%</p>
    </div>
  )
}

export default PriceDiscount
