import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Navbar = ({
  logoText = "Zé Delivery App"
}) => {
  return (
    <ul className="navbar">
      <li className="logo">{logoText}</li>
    </ul>
  );
};

Navbar.propTypes = {
  logoText: PropTypes.string
};

export default Navbar;
