import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import "./style.scss";

const CardProduct = ({ children, className, title, images = [], ...props }) => {
  return (
    <Card className={`card-product ${className}`}>
      {images.length > 0 && <img className="card-product-image" src={images[0].url} alt="" />}

      <div className="card-product-content">
        <div className="card-product-content-title">
          {title}
        </div>
        {children}
        <div className="card-product-content-actions">
          xasxa
      </div>
      </div>
    </Card>
  );
};

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string
    })
  )
};

export default CardProduct;
