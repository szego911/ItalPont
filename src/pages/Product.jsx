import React from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum.jsx";
import ProductDisplay from "src/components/ProductDisplay/ProductDisplay.jsx";

const Product = () => {
  const products = JSON.parse(window.localStorage.getItem("product"));

  const { productName } = useParams();

  const product = products.find((e) => e.name === productName);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
