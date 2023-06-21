import React from "react";
import Navication from "./Navication";
import { Outlet } from "react-router";
import Human from "../components/Human";

import Footer from "./Footer";
const Shared_layout = () => {
  return (
    <nav className="Sharedlayout">
      <Navication />
      <Outlet />
      <Footer />
    </nav>
  );
};

export default Shared_layout;
