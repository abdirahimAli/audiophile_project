import React from "react";
import img1 from "../assets/home/desktop/image-hero.jpg";
import data from "../data";
import Commonitems from "../components/Commonitems";
import Display_one from "../components/Display-comp/Display_one";
import Display_two from "../components/Display-comp/Display_two";
import Display_three from "../components/Display-comp/Display_three";
import { Link } from "react-router-dom";
import Human from "../components/Human";

const Home = () => {
  const num = [4];
  return (
    <section className="Home-container">
      <article className="Home-article-1">
        <div className="img1-Text">
          <div className="new-product">
            <h4> NEW PRODUT</h4>
          </div>

          <h1> XX99 Mark || Headphones</h1>
          <p>
            {" "}
            Experience natural, lifelike audio with expetional build quality
            made for the pationate music enthusiast{" "}
          </p>
          <Link className="links-stylying" to={`/Headphones/${num[0]}`}>
            <button className="btn btn-1"> SEE PRODUCT</button>
          </Link>
        </div>

        
      </article>

      <article className="Home-article-3">
        <div>
          <Display_one />
        </div>
      </article>
      <article className="Home-article-4">
        <div>
          <Display_two />
        </div>
      </article>
      <article className="Home-article-5">
        <div>
          <Display_three />
        </div>
      </article>
      <article className="Home-article-2">
        <div>
          <Commonitems />
        </div>
      </article>
      <article className="Home-article-6">
        <div>
          <Human />
        </div>
      </article>
    </section>
  );
};

export default Home;
