import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ title, desc }) => {
  return (
    <div className="listItemComponent" data-test="listItemComponent">
      <h2 data-test="titleClassName">{title}</h2>
      <h4 data-test="descClassName">{desc}</h4>
    </div>
  );
};

ListItem.prototype = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ListItem;
