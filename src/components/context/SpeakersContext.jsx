


import React, { createContext, useContext, useState } from "react";

const Globalcontext3 = createContext();

// custome hook to make using conext easyer //

export const useGlobalcontext3 = () => useContext(Globalcontext3);

const SpeakersContext = ({ children }) => {
  const [SpeakersCartitems, setSpeakersCartitems] = useState([
  ]);

  console.log("SpeakersCartitems", setSpeakersCartitems);
  return (
    <Globalcontext3.Provider
      value={{ SpeakersCartitems, setSpeakersCartitems }}
    >
      {children}
    </Globalcontext3.Provider>
  );
};

export default SpeakersContext;
