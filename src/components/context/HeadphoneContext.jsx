import React, { createContext, useContext, useState } from "react";

const Globalcontext2 = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext2 = () => useContext(Globalcontext2);

const HeadphoneContext = ({ children }) => {
  const [HeadphoneCartitems, setHeadphoneCartitems] = useState([
    // {id:3, Quantity:3}
  ]);

  console.log("HeadphoneCartitems", setHeadphoneCartitems);
  return (
    <Globalcontext2.Provider
      value={{ HeadphoneCartitems, setHeadphoneCartitems }}
    >
      {children}
    </Globalcontext2.Provider>
  );
};

export default HeadphoneContext;
