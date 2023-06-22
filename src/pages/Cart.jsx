import React from "react";
import data from "../data";
import { useState } from "react";
import { useGlobalcontext } from "../components/AppContext";
import { useGlobalcontext2 } from "../components/context/HeadphoneContext";
import { useGlobalcontext3 } from "../components/context/SpeakersContext";
import { useGlobalcontext4 } from "../components/context/EarphoneContext";
import Cartcomponent from "../components/Cartcomponent";
import CartitemsContext, { useGlobalcontext5 } from '../components/context/CartitemsContext'
import { Link } from "react-router-dom";

const Cart = ({ setcheackout }) => {
  let out = 0;
  // const product = data.find((product) => product.id == id);
  const { catagoreyfilter, setCatagoreyfilter } = useGlobalcontext();
  const { HeadphoneCartitems, setHeadphoneCartitems } = useGlobalcontext2();
  const { SpeakersCartitems, setSpeakersCartitems } = useGlobalcontext3();
  const { EarphoneCartitems, setEarphoneCartitems } = useGlobalcontext4();
  const [Removeitem,setRemoveitem]= useState([]);
  
  

  let Products_inCart = [];

  EarphoneCartitems.map((obj) => {
    Products_inCart.push(obj);
    // setCartitems(Products_inCart);
  });
  HeadphoneCartitems.map((obj) => {
    Products_inCart.push(obj);
    // setCartitems(Products_inCart);
  });
  SpeakersCartitems.map((obj) => {
    Products_inCart.push(obj);
    // setCartitems(Products_inCart);
  });

  // console.log("setCartitems", setCartitems);
  const removeall = () => {
    setHeadphoneCartitems([]);
    setSpeakersCartitems([]);
    setEarphoneCartitems([]);
  };
  function calculateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  let total_price = [];
  console.log("Products_inCart", Products_inCart);
  Products_inCart.map((item) => {
    const product = data.find((product) => product.id == item.id);
    console.log("product", product);
    let PriceXQuantity = product.price * item.Quantity;
    total_price.push(PriceXQuantity);
  });
let removeArray = [];
console.log("removeArray", removeArray);
removeArray.push(catagoreyfilter);

const Render_these_items =removeArray.map((element)=>{
const temp =  Products_inCart.filter((item) => {
  return item.id != element;
});
return temp;

})
  console.log("Render_these_items", Render_these_items);



  return (
    <section className="Cartcontainer">
      <article className="Navication-back"> </article>

      <article className="cartcomponent-container-parent">
        <div className="cart-header">
          <span>
            <h4> cart ({Render_these_items .length})</h4>
          </span>

          <button className="removeall" onClick={removeall}>
            remove all
          </button>
        </div>

        {Render_these_items .length ? (
          Render_these_items[0].map((product) => {
            return (
              <Cartcomponent
                id={product.id}
                key={product.id}
                Quantity={product.Quantity}
                setRemoveitem={setRemoveitem}
              />
            );
          })
        ) : (
          <h2> cart is empty!</h2>
        )}
        <div className="Total">
          <h4 className="total_info"> Total price</h4>
          <h4 className="total_price"> $ {calculateSum(total_price)}</h4>
        </div>

        {Render_these_items .length ? (
          <Link to="/Cheackout">
            {" "}
            <button
              onClick={() => {
                setcheackout(true);
              }}
              className="cart_btn"
            >
              {" "}
              CHECKOUT
            </button>
          </Link>
        ) : null}
      </article>
    </section>
  );
};

export default Cart;
