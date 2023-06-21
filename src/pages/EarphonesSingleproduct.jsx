import React from "react";
import productdata from "../data";
import { useState } from "react";
import img1 from "/image-xx99-mark-two-headphones.jpg";
import { Link, useParams } from "react-router-dom";
import Commonitems from "../components/Commonitems";
import Human from "../components/Human";
import img4 from "/image-best-gear.jpg";
import { useGlobalcontext } from "../components/AppContext";
import { useGlobalcontext4 } from "../components/context/EarphoneContext";

const EarphonesSingleproduct = () => {
  const { EarphoneCartitems, setEarphoneCartitems } = useGlobalcontext4();
  const [Quantity, setQuantity] = useState(0);
  let [Fill_Cart, setFill_Cart] = useState(false);
  const productID = useParams().ProductID;
  const product = productdata.find((product) => product.id == productID);

  let array = EarphoneCartitems; // The previouse products in the cart is saved //

  // Functions //
  const Addtocart = () => {
    setFill_Cart(true);
    if (Quantity > 0) {
      setFill_Cart(false);
      let obj = { id: product.id, Quantity: Quantity };
      Check_Products(obj);
    }
  };

  // check if the current product is same as the previouse and then removes it //
  const Check_Products = (array) => {
    // checked_array is the filtered array //
    let checked_array = EarphoneCartitems.filter((product) => {
      return product.id != array.id;
    });
    // the new product is added here to the filtered array//
    checked_array.push(array);
    // Then its added to the Cart //
    setEarphoneCartitems(checked_array);
  };
  const increament = () => {
    setQuantity(Quantity + 1);

    console.log("increament", array.id);
  };
  const decrease = () => {
    if (Quantity) setQuantity(Quantity - 1);
    console.log("decrease");
  };

  return (
    <section className="HeadphonesSinglproduct-container">
      <article className="Navication-back"> </article>
      <Link className="Linkto-home" to="/Earphones">
        Go back
      </Link>
      <article className="Headphones-Singlproduct">
        <div className="Headphones-img1">
          <img src={product.image.desktop} />
        </div>
        <div className="Headphones-info1">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>

          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>$ {product.price}</span>

          <div className="Addtothecart">
            <div className="Quantity-singlepage">
              {Fill_Cart ? (
                <div className="fillthe_Cart">
                  <p>Select Quantity!</p>
                </div>
              ) : null}
              <span onClick={increament} className="positive-sign-singlepage">
                +
              </span>
              <span className="Quantity-value-singlepage">
                {" "}
                <span className="Quantity-value-singlepage">{Quantity}</span>
              </span>
              <span onClick={decrease} className="negative-sign-singlepage">
                -
              </span>
            </div>
            <button onClick={Addtocart} className="btn2">
              Add to cart
            </button>
            {/* {console.log("is_Cart_Filled", is_Cart_Filled)} */}
            {/* {Fill_Cart ? <h5>hi</h5> : null} */}
          </div>
        </div>
      </article>
      <article className="HeadphonesSinglproduct-info">
        <div className="HeadphonesSinglproduct-info1">
          <h2> FEATURES</h2>
          <p>{product.features}</p>
        </div>
        <div className="HeadphonesSinglproduct-info2">
          <h2> IN THE BOX</h2>
          <p>
            <ul>
              <li>
                <span>{product.includes[0].quantity}x</span>{" "}
                {product.includes[0].item}
              </li>
              <li>
                {" "}
                <span>{product.includes[1].quantity}x</span>
                {product.includes[1].item}
              </li>
              <li>
                {" "}
                <span>{product.includes[2].quantity}x</span>
                {product.includes[2].item}
              </li>
              {/* <li>{product.includes[3].item}</li>
              <li>{product.includes[4].item}</li> */}
            </ul>
          </p>
        </div>
      </article>

      <article className="Gallery">
        <div className="img1">
          <div className="img11">
            <img className="image1" src={product.gallery.first.desktop} />
          </div>
          <div className="img12">
            {" "}
            <img
              className="image1 bottom"
              src={product.gallery.second.desktop}
            />
          </div>
        </div>
        <div className="img3">
          <img className="image12" src={product.gallery.third.desktop} />
        </div>
      </article>
      <article className="Others">
        <h3> You might also like</h3>
        <div className="Others-content">
          <div className="others1">
            <img
              className="others1-img"
              src={product.others[0].image.desktop}
            />
            <h4>{product.others[0].name}</h4>
            <button className="btn2">see product</button>
          </div>
          <div className="others1">
            <img
              className="others1-img"
              src={product.others[1].image.desktop}
            />
            <h4>{product.others[1].name}</h4>
            <button className="btn2">see product</button>
          </div>
          <div className="others1">
            <img
              className="others1-img"
              src={product.others[2].image.desktop}
            />
            <h4>{product.others[2].name}</h4>
            <button className="btn2">see product</button>
          </div>
        </div>
      </article>
      <article className="Home-article-2">
        <div>
          <Commonitems />
        </div>
      </article>

      <article>
        <div>
          <Human />
        </div>
      </article>
    </section>
  );
};

export default EarphonesSingleproduct;
