import React, { createContext, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;


const useStoreContext = () => {
  return useContext(StoreContext);
};

export { useStoreContext };
