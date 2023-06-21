import React from 'react'
import { Link } from "react-router-dom";
import img from "../assets/shared/desktop/logo.svg"
import { AiOutlineShoppingCart } from 'react-icons/Ai';
// import img from "../assets/shared/desktop/logo.svg"
const Navication = () => {
  return (
    <div className='link-positioning'>

    <Link
        className="links-stylying"
        to="/"
       >

       <img className='img' src= {img} />
      </Link>



  

    <Link
        className="links-stylying"
        to="/"
        
      >Home
       
      </Link>


      <Link
        className="links-stylying"
        to="/Headphones"
        
      >Headphones
       
      </Link>


      <Link
        className="links-stylying"
        to="/Speakers"
        
      >Speakers
       
      </Link>


      <Link
        className="links-stylying"
        to="/Earphones"
        
      >Earphones
       
      </Link>

       <Link
        className="links-stylying cart"
        to="/Cart"
       >
        <AiOutlineShoppingCart/>
       
      </Link>

      </div>
  )
}

export default Navication