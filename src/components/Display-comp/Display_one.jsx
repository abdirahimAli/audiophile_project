import React from 'react'
import { Link } from "react-router-dom";
const Display_one = () => {
  return (
    <article className="Display_one-container">
     
      <div className="Display_one-text-container">
        <h1>
          ZX9
          <br />
          speaker
        </h1>
        <p>
          Upgrade to premium Speakers that are
          <br />
          phenomenally built to deliver truly remarkable sound.
        </p>
        <Link className="links-stylying" to={`/Speakers/${6}`}>
          <button>SEE PRODUT</button>
        </Link>
      </div>
    </article>
  );
}

export default Display_one