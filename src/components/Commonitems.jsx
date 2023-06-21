import React from 'react'
import Commitem from './commitem'
import img1 from '/image-category-thumbnail-headphones.png'
import img2 from '/image-speaker-zx9.png'
import img3 from '/image-category-thumbnail-earphones.png'
import { AiOutlineRight } from "react-icons/Ai";
import Human from './Human'
import { Link } from "react-router-dom";
const Commonitems = () => {

  let array = [
    {
      id: 1,
      text: "Headphones",
      img: img1,
      number: 3,
    },

    {
      id: 3,
      text: "Earphones",
      img: img3,
      number: 1,
    },
  ];
  return (
    <section className="Commonitems-section">
      <div className="Commonitems-rendring">
        {array.map((num) => {
          return <Commitem key={num.id} {...num} />;
        })}

        <div className="commitem-container">
          <img className="speakerRendring-img" src={img2} />
          <h4>Speakers</h4>
          <Link className="links-stylying" to={`/Headphones/${6}`}>
            <button className='common-btn'>
              shop <AiOutlineRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Commonitems