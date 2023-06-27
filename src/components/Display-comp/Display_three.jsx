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
        <div className="new-product">
          <h1> YX1 earphones</h1>
        </div>

        <Link className="D3-btn" to={`/Earphones/${1}`}>
          <button className="btn btn-2 D3-btn">see product</button>
        </Link>
      </div>
    </article>
  );
};

export default Display_three;
