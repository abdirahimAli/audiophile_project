import React, { createContext, useContext, useState } from "react";

const Globalcontext5 = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext5 = () => useContext(Globalcontext5);

const CartitemsContext = ({ children }) => {
  const [Cartitems, setCartitems] = useState([]);

  //   console.log("HeadphoneCartitems", setHeadphoneCartitems);
  return (
    <Globalcontext5.Provider value={{ Cartitems, setCartitems }}>
      {children}
    </Globalcontext5.Provider>
  );
};

export default CartitemsContext;
