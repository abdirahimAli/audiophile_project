import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDoneAll } from "react-icons/md";


const Thankyou = () => {
  return (
    <section className="Cartcontainer">
      <article className="Navication-back"> </article>
      <form className="Form Thankyou">
        <div className="icon">
          <MdOutlineDoneAll />
        </div>
        <h1>
          Thank you <br /> for your order{" "}
        </h1>
        <p>You will recieve a confirmation email shortly</p>
        <Link to="/">
          <button>GO BACK HOME</button>
        </Link>
      </form>
    </section>
  );
};

export default Thankyou;
