import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader";
import InputSearch from "../../components/InputSearch";
import CardEmptyState from "../../components/CardEmptyState";
import useDistribuitorProducts from "../../hooks/useDistribuitorProducts";
import { Paths } from "../../utils/constants";
import { setLocation } from "../../slices/location";
import { setProducts } from "../../slices/products";
import { googleMapsContext } from "../../App";

import "./style.scss";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const { location = {} } = useSelector(state => state.location);
  const { products } = useDistribuitorProducts(location);
  const { isLoaded: isGoogleMapsLoaded = false } = useContext(googleMapsContext);

  const hasAdressFilled = location.lat && location.lng;

  useEffect(() => {
    if (hasAdressFilled) {
      setIsLoading(true);

      if (products.length === 0) {
        setIsLoading(false);
      } else {
        dispatch(setProducts(products));

        history.push(`${Paths.products}${Paths.list}`);
      }
    }
  }, [dispatch, hasAdressFilled, history, products]);

  const handlePlaceSelected = (place) => {
    dispatch(setLocation(place));
  };

  return (
    <div className="places">
      <div className="places-image"></div>

      {isGoogleMapsLoaded ? (
        <div className="places-box p-3">
          <div>
            <h2>Digite seu endereço para pesquisar distribuidores próximos a você</h2>
          </div>

          <InputSearch handlePlaceSelected={handlePlaceSelected} className="places-input" />

          {isLoading && <Loader />}

          {(hasAdressFilled && !isLoading) && <CardEmptyState />}
        </div>
      ) : (
        <Loader />
      )}

    </div>
  );
};

export default Home;
