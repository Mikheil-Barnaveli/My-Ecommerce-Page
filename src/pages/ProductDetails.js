import React, { useState } from "react";
import ProductDetailsTemplate from "../Modules/ProductDetails/ProductDetailsTemplate";
import Header from "../genericComponents/Header/Header";
import Dropdown from "../genericComponents/Header/components/UserInfo/Cart/components/Dropdown";
import ProductsMain from "../Modules/ProductDetails/ProductsMain";
import { log } from "react-modal/lib/helpers/ariaAppHider";
import { v4 as uuidv4 } from 'uuid';
import cartImage from '../assets/images/image-product-1-thumbnail.jpg'

function ProductDetails() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const handleCartButtonClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };
  const defaultObject = {
    id: uuidv4(),
    title: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    priceOriginal: 250,
    discount: 50,
    quantity: 0,
    src: cartImage
  };
  const [myObject, setMyObject] = useState(defaultObject);
  const [data, setData] = useState([]);

  const handleChangeQuantity = (changeType) => {
    if (changeType === '+') {
      setMyObject(prevState => ({ ...prevState, quantity: prevState.quantity + 1 }));
    } else if (changeType === '-' && myObject.quantity > 0) {
      setMyObject(prevState => ({ ...prevState, quantity: prevState.quantity - 1 }));
    }
  };
  const handleAddItem = () => {
    if (myObject.quantity > 0){
    setData(prevState => [...prevState, myObject]);
    setMyObject(defaultObject)}
  };

  const removeItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };
console.log(data);
  return (
    <ProductDetailsTemplate
      header={
        <div
          style={{ height: "15dvh", backgroundColor: "#FFFFFF", width: "100%" }}
        >
          <Header handleCart={handleCartButtonClick} />
          {isDropDownVisible && <Dropdown data={data} removeItem={removeItem}/>}
        </div>
      }
      main={
        <ProductsMain myObject = {myObject} handleChangeQuantity={handleChangeQuantity} handleAddItem={handleAddItem} />
      }
    />
  );
}

export default ProductDetails;
