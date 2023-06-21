import React from "react";
import Commonitems from "../components/Commonitems";
import { Link } from "react-router-dom";
import Human from "../components/Human";

import data from "../data";
const Earphones = () => {
  const product1 = data.find((product) => product.id == 1);

  return (
    <section className="Headphones-container">
      <div className="Header">
        <h1> Earphones</h1>
      </div>

      <article className="Headphones-one">
        <div className="Headphones-img1">
          <img src={product1.image.desktop} />
        </div>
        <div className="Headphones-info1">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>

          <h1>{product1.name}</h1>
          <p>{product1.description}</p>
          <Link className="links-stylying" to={`/Earphones/${product1.id}`}>
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

export default Earphones;
