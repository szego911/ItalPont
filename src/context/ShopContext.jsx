import React, { createContext, useContext } from "react";
import axios from "axios";
import { CategoryContext } from "./CategoryContext";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const { url } = useContext(CategoryContext);
  console.log(url);
  axios
    .get(url + "product/all")
    .then((response) => {
      window.localStorage.setItem("product", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
      console.log(url);
      console.log(url + "Termékeket nem sikerült elérni");
    });

  return (
    <ShopContext.Provider value={" "}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
