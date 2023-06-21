import React, { createContext, useContext, useState } from "react";

const Globalcontext = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext = () => useContext(Globalcontext);

const AppContext = ({ children }) => {
  const [catagoreyfilter, setCatagoreyfilter] = useState([]);
  const [Total, setTotal] = useState([]);
  console.log("catagoreyfilter", catagoreyfilter);
  return (
    <Globalcontext.Provider value={{ catagoreyfilter, setCatagoreyfilter,Total,setTotal }}>
      {children}
    </Globalcontext.Provider>
  );
};

export default AppContext;
