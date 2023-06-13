import PriceTemplate from "./PriceTemplate";
import PriceNow from "./components/PriceNow";
import PriceOriginal from "./components/PriceOriginal";
import PriceDiscount from "./components/PriceDiscount";
function Price({myObject}) {
  return (
    <PriceTemplate
      priceNow={<PriceNow price={myObject.price}/>}
      priceOriginal={<PriceOriginal priceOriginal={myObject.priceOriginal}/>}
      discount={<PriceDiscount discount = {myObject.discount}/>}
    />
  );
}

export default Price;
