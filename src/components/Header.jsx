import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <section className="header">
      <button className="header-btn naga">Add</button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn color-red">Clear</button>
    </section>
  );
};

export default Header;
