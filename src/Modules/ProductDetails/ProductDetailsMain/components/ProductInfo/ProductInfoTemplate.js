import React from 'react'
import './ProductInfoTemplate.css'
function ProductInfoTemplate(props) {
  return (
    <div className="products-info">
        {props.brandName}
        {props.productName}
        {props.description}
        {props.price}
        {props.priceButtons}
    </div>
  )
}

export default ProductInfoTemplate
