import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd }) => {
  return (
    <section className="header">
      <button className="header-btn naga" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn color-red">Clear</button>
    </section>
  );
};

Header.PropTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default Header;
