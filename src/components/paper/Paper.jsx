/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";
import PropTypes from "prop-types";

//import style from "./paper.module.css";
import * as styles from "./paper.styles";

const Paper = ({ children }) => {
  const theme = useTheme();
  return (
    <div css={styles.container({ theme })}>
      <div css={styles.frame({ theme })}>{children}</div>
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
