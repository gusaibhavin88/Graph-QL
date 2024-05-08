// MyContext.js
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export function MyContextProvider({ children }) {
  const [rows, setRows] = useState([]);

  const contextValue = {
    rows,
    setRows,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
