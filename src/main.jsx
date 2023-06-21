import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContext from "./components/AppContext.jsx";
import HeadphoneContext from "./components/context/HeadphoneContext.jsx";
import SpeakersContext from "./components/context/SpeakersContext.jsx";
import EarphoneContext from "./components/context/EarphoneContext.jsx";
import CartitemsContext from "./components/context/CartitemsContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartitemsContext>
    <HeadphoneContext>
      <EarphoneContext>
        <SpeakersContext>
          <AppContext>
            <App />
          </AppContext>
        </SpeakersContext>
      </EarphoneContext>
    </HeadphoneContext>
  </CartitemsContext>
);
