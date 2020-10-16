import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/pvvr-desktop-02-193346b2-98d4-464b-94ad-c728a4bf9fff._CB441890250_QL85_V1_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="7865"
          title="PlayStation 4 Pro 1TB Console"
          price={399.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41tNfEM%2BBmL._AC_.jpg"
        />
        <Product
          id="7865"
          title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer, 6 Quart, 14 One-Touch Programs "
          price={79.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81i8c1fSkyL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7865"
          title="BioShock Big Daddy Backpack"
          price={79.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/912Jm1mF1qL._SL1500_.jpg"
        />
        <Product
          id="7865"
          title="
          SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model) "
          price={599.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
        />
        <Product
          id="7865"
          title="Graco Tranzitions 3 in 1 Harness Booster Seat, Proof"
          price={79.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81dPR1Av3xL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="7865"
          title="
          LG 49WL95C-W 49-Inch Curved 32: 9 Ultrawide Dqhd IPS with HDR10 and USB Type-C,49 Inch Curved - 32:9 DQHD Resolution"
          price={1352.39}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71EP7F-yPKL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
