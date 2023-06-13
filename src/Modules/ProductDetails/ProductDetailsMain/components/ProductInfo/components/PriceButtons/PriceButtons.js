import React from "react";
import AmountBtn from "./components/AmountBtn";
import "./PriceButtons.css";
import AddToCart from "./components/AddToCart";
function PriceButtons(props) {
  return (
    <div className="price-buttons">
      <AmountBtn
        myObject={props.myObject}
        handleChangeQuantity={props.handleChangeQuantity}
      />
      <AddToCart
        handleAddItem={props.handleAddItem}
      />
    </div>
  );
}

export default PriceButtons;
