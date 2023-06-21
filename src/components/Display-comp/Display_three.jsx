import React from "react";
import img1 from "/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";
const Display_three = () => {
  const num = [2];
  return (
    <article className="Display_three-container">
      <div className="Display_three-img">
        <img src={img1} />
      </div>
      <div className="Display_three-info">
        <div className="new-product"></div>
        <h1>yx1 earphones</h1>
        <p></p>
        <Link className="links-stylying" to={`/Earphones/${1}`}>
          <button className="btn btn-2">see product</button>
        </Link>
      </div>
    </article>
  );
};

export default Display_three;
