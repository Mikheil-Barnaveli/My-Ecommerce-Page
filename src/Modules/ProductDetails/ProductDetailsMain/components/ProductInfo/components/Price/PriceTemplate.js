import React from "react";
import "./PriceTemplate.css";
function PriceTemplate(props) {
  return (
    <div className="price">
      <div className="price-now-orig">
      {props.priceNow}
      {props.discount}
      </div>
      {props.priceOriginal}

      {/* <div className="price-now-orig">
            {props.priceNow}
            {props.priceOriginal}
        </div>
        {props.discount} */}
    </div>
  );
}

export default PriceTemplate;
