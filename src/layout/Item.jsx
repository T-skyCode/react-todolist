/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

const Item = ({ children, flex, align, padding }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
        padding: ${padding};
      `}
    >
      {children}
    </div>
  );
};

Item.defaultProps = {
  align: "left",
  padding: "unset"
};

Item.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["center", "left", "right"]),
  padding: PropTypes.string
};

export default Item;
