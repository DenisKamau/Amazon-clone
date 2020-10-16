import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_LP_Dash_en_US.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <div className="checkout__empty">
              <img
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt=""
                style={{ maxWidth: "100%", marginRight: "15px" }}
              />
              <h1 style={{ marginLeft: "15px" }}>Your Amazon Cart is empty</h1>
            </div>
            <p
              style={{
                marginTop: "10px",
                marginLeft: "15px",
                lineHeight: "25px",
                fontSize: "12px",
              }}
            >
              The price and availability of items at Amazon.com are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price. <br />
              Do you have a gift card or promotional code? We'll ask you to
              enter your claim code when it's time to pay.
            </p>
          </div>
        ) : (
          <div>
            <h1 style={{ marginLeft: "15px" }}> Your Shopping Basket </h1>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
