import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ModalHeader = ({ children }) => (
  <div className="modal-header">
    {children}
  </div>
);

const ModalBody = ({ children }) => (
  <div className="modal-body">
    {children}
  </div>
);

const ModalFooter = ({ children }) => (
  <div className="modal-footer">
    {children}
  </div>
);

const Modal = ({
  children,
  id = "modal"
}) => {
  return (
    <div className="modal" aria-hidden="true" id={id}>
      <div className="modal-dialog">
        {children}
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node
};

ModalBody.propTypes = {
  children: PropTypes.node
};

ModalFooter.propTypes = {
  children: PropTypes.node
};

Modal.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
