import React from "react";
import Navication from "./Navication";
import { AiFillFacebook } from "react-icons/Ai";
import { AiFillTwitterSquare } from "react-icons/Ai";
import { AiFillInstagram } from "react-icons/Ai";

const Footer = () => {
  return (
    <section className="Footer-container">
      <div className="Footer-Nav">
        <Navication />
      </div>

      <article className="Footer-article">
        <div className="Footer-text">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            small team
            <br />
            of music lovers and sound specialists who are devoted to helping you
            get the
            <br />
            most out of personal audio. Come and visit our demo facility. We're
            open 7<br />
            days a week.
          </p>
          <span className="Copyright-text">
            <p> Copyright 2021. All Rights Reserved </p>
          </span>
        </div>

        <div className="Footer-icons">
          <span>
            <AiFillFacebook />
          </span>
          <span>
            <AiFillTwitterSquare />
          </span>

          <span>
            <AiFillInstagram />
          </span>
        </div>
      </article>
    </section>
  );
};

export default Footer;
