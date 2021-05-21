import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <div data-test="HeaderComponent">
      <h1>Posts</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button type="button" className="btn" data-test="btn">
        Get Posts
      </button>
    </div>
  );
};

export default Header;
