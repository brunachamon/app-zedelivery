import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import "./style.scss";
import { formatMoneyWithCurrency } from "../../utils/money";

const CardProduct = ({ className, title, images = [], productVariants = [] }) => {
  const {
    subtitle = "",
    description = "",
    shortDescription = "",
    price = 0
  } = productVariants[0] || {};

  return (
    <Card className={`card-product ${className}`}>
      {images.length > 0 && <img className="card-product-image" src={images[0].url} alt="" />}

      <div className="card-product-content">
        <div className="card-product-content-title">
          {title}
        </div>
        <div className="card-product-content-price">
          {formatMoneyWithCurrency(price)}
        </div>
        <div className="card-product-content-actions">
          {description || shortDescription || subtitle}
        </div>
      </div>
    </Card>
  );
};

CardProduct.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string
    })
  ).isRequired,
  productVariants: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number
    })
  ).isRequired
};

export default CardProduct;
