import React from "react";
import { useState } from "react";
import productdata from "../data";
import { Link, redirect, useParams } from "react-router-dom";
import Commonitems from "../components/Commonitems";
import img4 from "/image-best-gear.jpg";
import { useGlobalcontext } from "../components/AppContext";
import { useGlobalcontext2 } from "../components/context/HeadphoneContext";

const HeadphonesSingleproduct = () => {
  const [Quantity, setQuantity] = useState(0);
  const { HeadphoneCartitems, setHeadphoneCartitems } = useGlobalcontext2();
  // use pararms //
  const productID = useParams().ProductID;
  const product = productdata.find((product) => product.id == productID);
  // Varriables //
  let [Fill_Cart, setFill_Cart] = useState(false);
  let array = HeadphoneCartitems;
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
    let checked_array = HeadphoneCartitems.filter((product) => {
      return product.id != array.id;
    });
    // the new product is added here to the filtered array//
    checked_array.push(array);
    // Then its added to the Cart //
    setHeadphoneCartitems(checked_array);
  };

  const increament = () => {
    setQuantity(Quantity + 1);
  };
  const decrease = () => {
    if (Quantity) setQuantity(Quantity - 1);
  };

  return (
    <section className="HeadphonesSinglproduct-container">
      <article className="Navication-back"></article>
      <Link className="Linkto-home" to="/Headphones">
        Go back
      </Link>
      <article className="Headphones-Singlproduct">
        <div className="Headphones-img11">
          <img src={product.image.desktop} />
        </div>
        <div className="Headphones-info1">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>

          <h1>{product.name}</h1>
          <p className="product_description">{product.description}</p>
          <span className="price" style={{ marginLeft: 20 }}>
            {" "}
            price: ${product.price}
          </span>

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
              <span className="Quantity-value-singlepage">{Quantity}</span>
              <span onClick={decrease} className="negative-sign-singlepage">
                -
              </span>
            </div>
            <button onClick={Addtocart} className="btn2 btn22">
              Add to cart
            </button>
          </div>
        </div>
      </article>
      <article className="HeadphonesSinglproduct-info">
        <div className="HeadphonesSinglproduct-info1">
          <h2> FEATURES</h2>
          <p className="Paragraph_info">{product.features}</p>
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
            <img
              className="image1 img_gallery1"
              src={product.gallery.first.desktop}
            />
          </div>
          <div className="img12">
            {" "}
            <img
              className="image1 bottom img_gallery2"
              src={product.gallery.second.desktop}
            />
          </div>
        </div>
        <div className="img3">
          <img
            className="image12 img_gallery3"
            src={product.gallery.third.desktop}
          />
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

      <article className="Human-container">
        <div className="humanimg-Text">
          <div className="humanimgText-header">
            <h1>
              {" "}
              BRING YOU THE <br /> <span className="Best">BEST</span>AUDIO GEAR{" "}
            </h1>
          </div>
          <div className="humanimgText-paragraph">
            <p className="commonitems-paragraph">
              {" "}
              Located at the heart of New York City. Audiophile is the premier
              <br />
              store for high end headphones,earphones,speakers,and audio
              <br />
              accessories. We have a large showroom and luxury <br />
              demonstration rooms available for you to browse and
              <br /> experience a wide range of our products. Stop by our store
              to
              <br /> meet some of the fantastic people who make Audiophile the
              <br />
              best place to buy portable audio equipment.{" "}
            </p>
          </div>
        </div>

        <img className="humanimgimg" src={img4} />
      </article>
    </section>
  );
};

export default HeadphonesSingleproduct;
