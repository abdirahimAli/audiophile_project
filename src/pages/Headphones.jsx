import React from "react";
import img1 from "/image-xx99-mark-two-headphones.jpg";

import img2 from "/image-xx99-mark-one-headphones.jpg";

import img3 from "/image-xx59-headphones.jpg";
import Commonitems from "../components/Commonitems";
import { Link } from "react-router-dom";
import Human from "../components/Human";
import data from "../data";
const Headphones = () => {
  const product1 = data.find((product) => product.id == 2);
  const product2 = data.find((product) => product.id == 3);
  const product3 = data.find((product) => product.id == 4);
  const num = [4, 3, 2];
  return (
    <section className="Headphones-container">
      <div className="Header">
        <h1> Headphones</h1>
      </div>

      <article className="Headphones-one">
        <div className="Headphones-img1">
          <img src={product3.image.desktop} />
        </div>
        <div className="Headphones-info11">
          <h1>{product3.name}</h1>
          <p>{product3.description}</p>
          <Link className="links-stylying" to={`/Headphones/${num[0]}`}>
            <button className="btn btn-1">see product</button>
          </Link>
        </div>
      </article>

      <article className="Headphones-two">
        <div className="Headphones-info2">
          <h1>{product2.name} </h1>
          <p>{product2.description}</p>
          <Link className="links-stylying" to={`/Headphones/${num[1]}`}>
            <button className="btn btn-1">see product</button>
          </Link>
        </div>
        <div className="Headphones-img2">
          {" "}
          <img src={product2.image.desktop} />
        </div>
      </article>

      <article className="Headphones-three">
        <div className="Headphones-img3">
          <img src={product1.image.desktop} />{" "}
        </div>
        <div className="Headphones-info3">
          <h1>{product2.name}</h1>
          <p>{product2.description}</p>
          <Link className="links-stylying" to={`/Headphones/${num[2]}`}>
            <button className="btn btn-1">see product</button>
          </Link>
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

export default Headphones;
