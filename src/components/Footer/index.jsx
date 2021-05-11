import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Footer = ({
  footerText = ""
}) => {
  return (
    <div className="footer">
      {footerText}
    </div>
  );
};

Footer.propTypes = {
  footerText: PropTypes.string
};

export default Footer;
