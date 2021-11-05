import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonText, emitEvent }) => {
  return (
    <div className="buttonComponent" data-test="buttonComponent">
      <button type="button" onClick={emitEvent}>
        {buttonText} mani
      </button>
      ;
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default Button;
