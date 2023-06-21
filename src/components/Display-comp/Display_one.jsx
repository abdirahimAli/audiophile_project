import React from 'react'
import img1 from '/image-speaker-zx9.png'
import { Link } from "react-router-dom";
const Display_one = () => {
  return (
    <article className="Display_one-container">
      <div className="Display_one-img-container">
        <img src={img1} />
      </div>
      <div className="Display_one-text-container">
        <h1>
          ZX9
          <br />
          speaker
        </h1>
        <p>
          Upgrade to premium Speakers that are
          <br />
          phenomenally built to deliver truly remarkable
          <br />
          sound
        </p>
        <Link className="links-stylying" to={`/Speakers/${6}`}>
          <button>SEE PRODUT</button>
        </Link>
      </div>
    </article>
  );
}

export default Display_one