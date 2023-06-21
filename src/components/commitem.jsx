import React from "react";
import { AiOutlineRight } from "react-icons/Ai";
import { Link } from "react-router-dom";
const commitem = ({ text, img, number }) => {
  return (
    <div className="commitem-container">
      <img className="Rendring-img" src={img} />
      <h4>{text}</h4>

      <Link className="links-stylying" to={`/Headphones/${number}`}>
        <button className="common-btn">
          shop <AiOutlineRight />
        </button>
      </Link>
    </div>
  );
};

export default commitem;
