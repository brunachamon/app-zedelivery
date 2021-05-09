import React from "react";
import { useSelector } from "react-redux";

import CardProduct from "../../../components/CardProduct";

const ProductsList = () => {
  const { products = [] } = useSelector(state => state.products);

  console.log(">>> products list loaded", products);

  return products.map(product => <CardProduct key={product.id} {...product}></CardProduct>);
};

export default ProductsList;
