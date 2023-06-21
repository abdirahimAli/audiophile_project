import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Headphones,
  Speakers,
  Earphones,
  HeadphonesSingleproduct,
  SpeakersSingleproduct,
  EarphonesSingleproduct,
  Cart,
  Cheackout,
  Protectedroute,
  Thankyou,
} from "./pages";
import Shared_layout from "./components/Shared_layout";
import "./App.css";

function App() {
  const [cheackout, setcheackout] = useState(false);
  const [ProductID_inCart, setProductID_inCart] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared_layout />}>
          <Route index element={<Home />} />
          <Route path="/Headphones" element={<Headphones />} />
          <Route
            path="/Headphones/:ProductID"
            element={<HeadphonesSingleproduct />}
          />
          <Route path="/Speakers" element={<Speakers />} />
          <Route
            path="/Speakers/:ProductID"
            element={<SpeakersSingleproduct />}
          />
          <Route path="/Earphones" element={<Earphones />} />
          <Route
            path="/Earphones/:ProductID"
            element={<EarphonesSingleproduct />}
          />
          <Route
            path="/Cart"
            element={
              <Cart
                setcheackout={setcheackout}
                setProductID_inCart={setProductID_inCart}
              />
            }
          />

          <Route
            path="/Cheackout"
            element={
              <Protectedroute cheackout={cheackout}>
                <Cheackout ProductID_inCart={ProductID_inCart} />
              </Protectedroute>
            }
          />
          <Route path="/ThankYou" element={<Thankyou />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
