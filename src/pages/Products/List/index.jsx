import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardProduct from "../../../components/CardProduct";
import { setLocation } from "../../../slices/location";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector(state => state.products);

  console.log(">>> products list loaded", products);
  useEffect(() => {
    return () => dispatch(setLocation({}));
  }, [dispatch]);

  return (
    <div className="py-4">
      {products.map(product => <CardProduct key={product.id} {...product}></CardProduct>)}
    </div>
  );
};

export default ProductsList;
