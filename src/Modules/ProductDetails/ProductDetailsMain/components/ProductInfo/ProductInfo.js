import React from "react";
import ProductInfoTemplate from "./ProductInfoTemplate";
import BrandName from "./components/BrandName";
import ProductName from "./components/ProductName";
import Description from "./components/Description";
import Price from "./components/Price/Price";
import PriceButtons from "./components/PriceButtons/PriceButtons";
function ProductInfo(props) {
  return (
    <ProductInfoTemplate
      brandName={<BrandName title={props.myObject.title} />}
      productName={<ProductName name={props.myObject.name} />}
      description={<Description description={props.myObject.description} />}
      price={<Price myObject={props.myObject} />}
      priceButtons={
        <PriceButtons
          myObject={props.myObject}
          handleChangeQuantity={props.handleChangeQuantity}
          handleAddItem={props.handleAddItem}
        />
      }
    />
  );
}

export default ProductInfo;
