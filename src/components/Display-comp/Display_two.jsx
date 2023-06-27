import React from "react";
import img1 from "/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";
const Display_two = () => {
  return (
    <article className="Display_two-container">
      <div className="Display_two-text-container">
        <h1>ZX7 speaker</h1>
        <Link className="button-stylying" to={`/Speakers/${5}`}>
          <button>SEE PRODUT</button>
        </Link>
      </div>

      {/* <div className='Display_one-img-container'>
    <img src={img1}/>
    </div> */}
    </article>
  );
};

export default Display_two;
