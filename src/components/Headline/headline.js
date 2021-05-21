import React from "react";
import "../../styles.css";
import PropTypes from "prop-types";

const Headline = (props) => {
  return (
    <div className="headline" data-test="headline">
      <h1>this is {props.posts}</h1>
      <h4>this is {props.desc}</h4>
    </div>
  );
};

Headline.propTypes = {
  posts: PropTypes.string,
  desc: PropTypes.string,
  tempData: PropTypes.arrayOf(
    PropTypes.shape({
      fname: PropTypes.string,
      lname: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool
    })
  )
};

export default Headline;
