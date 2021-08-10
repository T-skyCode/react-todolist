import React from "react";
import PropTypes from "prop-types";

import style from "./paper.module.css";

const Paper = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.frame}>{children}</div>
    </div>
  );
};

Paper.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.nodes),
    PropTypes.node
  ])
};

export default Paper;
