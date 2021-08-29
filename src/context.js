import React, { createContext, useState } from 'react'

export const StockContext = createContext();

export default function StockContextProvider({children}) {

  const [stock, setStock] = useState([33, 55, 99]);

  function changeStock(id) {
    console.log('change stock');
    let newArr = [...stock];
    newArr[id] = newArr[id] - 1;
    setStock(newArr);
  }

  return (
    <StockContext.Provider value={{ stock, changeStock }}>
      {children}
    </StockContext.Provider>
  )
}
