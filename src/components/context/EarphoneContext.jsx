import React, { createContext, useContext, useState } from "react";

const Globalcontext4 = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext4 = () => useContext(Globalcontext4);

const EarphoneContext = ({ children }) => {
  const [EarphoneCartitems, setEarphoneCartitems] = useState([
    // { id: 1, Quantity: 2 },
  ]);

  //   console.log("HeadphoneCartitems", setHeadphoneCartitems);
  return (
    <Globalcontext4.Provider
      value={{ EarphoneCartitems, setEarphoneCartitems }}
    >
      {children}
    </Globalcontext4.Provider>
  );
};

export default EarphoneContext;
