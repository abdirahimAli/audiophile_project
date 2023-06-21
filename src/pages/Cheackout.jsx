import React from "react";
import Cartcomponent from "../components/Cartcomponent";
import { useState } from "react";
import { GiWallet } from "react-icons/gi";
import data from "../data";
import { Link } from "react-router-dom";

import { useGlobalcontext2 } from "../components/context/HeadphoneContext";
import { useGlobalcontext3 } from "../components/context/SpeakersContext";
import { useGlobalcontext4 } from "../components/context/EarphoneContext";

const Cheackout = ({ ProductID_inCart }) => {
  const { HeadphoneCartitems, setHeadphoneCartitems } = useGlobalcontext2();
  const { SpeakersCartitems, setSpeakersCartitems } = useGlobalcontext3();
  const { EarphoneCartitems, setEarphoneCartitems } = useGlobalcontext4();
  const [inputs, setInputs] = useState({});
  let Products_inCart = [];
  let total_price = [];
  const [Cheackout_Complet, setCheackout_Complet] = useState(false);

  // let totalplusVat = (total_price/100)*25;
  console.log("Products_inCart", Products_inCart);
  

  EarphoneCartitems.map((obj) => {
    Products_inCart.push(obj);
  });
  HeadphoneCartitems.map((obj) => {
    Products_inCart.push(obj);
  });
  SpeakersCartitems.map((obj) => {
    Products_inCart.push(obj);
  });

  Products_inCart.map((item) => {
    const product = data.find((product) => product.id == item.id);
    console.log("product", product);
    let PriceXQuantity = product.price * item.Quantity;
    total_price.push(PriceXQuantity);
  });
  function calculateSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCheackout_Complet(true);
    // alert(inputs);
  };
  // console.log("inputs", inputs);
  let array = inputs;
  console.log("array", array);
  // console.log("array.d", ProductID_inCart);
  return (
    <section className="Cartcontainer">
      <article className="Navication-back"> </article>

      {Cheackout_Complet == false ? (
        <form className="Form Fill_details" onSubmit={handleSubmit}>
          <h2> CHECKOUT</h2>
          <h4>Billing details</h4>
          <label for="username"> Name</label> <br />
          <input
            type="text"
            name="username"
            id="username"
            // value={inputs.username || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <label for="Emailaddress">Email address</label>
          <br />
          <input
            type="email"
            name="Emailaddress"
            id="Emailaddress"
            // value={inputs.age || ""}
            onChange={handleChange}
            required
          />
          <br />
          <label for="Phonenumber">Phone number </label> <br />
          <input
            type="number"
            name=" Phonenumber"
            id="Phonenumber"
            // value={inputs.age || ""}
            onChange={handleChange}
            required
          />
          <br />
          <h4>Shipping details</h4>
          <label for="Address"> Address</label> <br />
          <input
            type="text"
            name="Address"
            id="Address"
            // value={inputs.username || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <label for="postcode"> Post Code</label> <br />
          <input
            type="text"
            name="postcode"
            id="postcode"
            // value={inputs.username || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <label for="City"> City</label> <br />
          <input
            type="text"
            name="City"
            id="City"
            // value={inputs.username || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <label for="Country"> Country</label> <br />
          <input
            type="text"
            name="Country"
            id="Country"
            // value={inputs.username || ""}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <h4> Payment Methods</h4>
          <div className="e-money">
            <input
              style={{
                marginTop: -12,
                marginLeft: -200,
                borderradius: 15,
                fontSize: 2,
              }}
              className="checkbox"
              type="radio"
              name="PaymentMethods"
              id="PaymentMethods"
              value="emoney"
              onChange={handleChange}
              required
            />
            <label style={{ marginTop: -10, marginLeft: -120 }} for="emoney">
              {" "}
              e-Money
            </label>
          </div>
          <br />
          <div className="e-money">
            <input
              style={{
                marginTop: -12,
                marginLeft: -155,
                borderradius: 15,
                fontSize: 2,
              }}
              className="checkbox"
              type="radio"
              name="PaymentMethods"
              id="PaymentMethods"
              value="CashonDeliver"
              onChange={handleChange}
              required
            />
            <label
              style={{ marginTop: -10, marginLeft: -130 }}
              for="CashonDelivery"
            >
              {" "}
              CashonDelivery
            </label>
          </div>
          <br /> <br />
          {/* {console.log("array.d", array.Country)} */}
          {array.PaymentMethods == "emoney" ? (
            <div className="Paymentmethod">
              <h3>Pay with e-money</h3>
              <label for="e-moneynumber"> e-money number</label> <br />
              <input
                type="text"
                name="e-moneynumber"
                id="e-moneynumber"
                required
                // value={inputs.username || ""}
                onChange={handleChange}
              />{" "}
              <br />
              <label for="e-moneypin"> e-money pin</label> <br />
              <input
                type="text"
                name="e-moneypin"
                id="e-moneypin"
                required
                // value={inputs.username || ""}
                onChange={handleChange}
              />{" "}
              <br />
            </div>
          ) : null}
          {array.PaymentMethods == "CashonDeliver" ? (
            <div className="Paymentmethod2">
              <span className="Wallet-icon">
                <GiWallet />
              </span>
              <p>
                The 'Cash on Delivery' option enables you to pay in cash when
                our delivery
                <br />
                courier arrives at your residence. Just make sure your address
                is correct so
                <br />
                that your order will not be cancelled.
              </p>
            </div>
          ) : null}
          <button
            type="submit"
            class="ContinuePay-btn bttn"
            // style="margin-right: 15px;"
            // onClick="placeOrder()"
          >
            Place Order
          </button>
        </form>
      ) : null}

      {Cheackout_Complet == true ? (
        <div className="Form Summary">
          <h3> Summary</h3>
          {Products_inCart.map((product) => {
            return (
              <Cartcomponent
                id={product.id}
                key={product.id}
                Quantity={product.Quantity}
              />
            );
          })}
          <div>
            <h5>
              Total: ${" "}
              {(calculateSum(total_price) / 100) * 25 +
                calculateSum(total_price)}
            </h5>
            <h5>shipping: $ 50</h5>
            <h5>VAT(included): ${(calculateSum(total_price) / 100) * 25}</h5>
            <h4>
              Grand Total:{" "}
              {(calculateSum(total_price) / 100) * 25 +
                calculateSum(total_price) +
                50}
            </h4>
          </div>
          <Link to="/ThankYou">
            <button className="ContinuePay-btn"> Continue & Pay</button>
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default Cheackout;
