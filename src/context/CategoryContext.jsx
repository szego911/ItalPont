import React, { createContext } from "react";
import categories from "../scripts/categories";

export const CategoryContext = createContext(null);

const CategoryContextProvider = (props) => {
  const live = true;
  const url = "https://rf1-italpont-production.up.railway.app/";
  const contextValue = { categories, url };

  return (
    <CategoryContext.Provider value={contextValue}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
