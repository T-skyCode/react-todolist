import React from "react";
import PropTypes from "prop-types";

const TodoFrom = () => {
  return (
    <section className="add">
      <form className="add-form">
        <input type="text" className="add-input" />
        <button className="add-btn">Add</button>
      </form>
    </section>
  );
};

export default TodoFrom;
