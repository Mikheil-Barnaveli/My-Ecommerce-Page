import React from 'react'
import './PriceNow.css'
function PriceNow({price}) {
  return (
    <p className="price-now">${price}</p>
  )
}

export default PriceNow
