import React from 'react'
import './ProductDetailsTemplate.css'

function ProductDetailsTemplate(props) {
  return (
    <div id='product-details-container'>
        {props.header}
        {props.main}
    </div>
  )
}

export default ProductDetailsTemplate