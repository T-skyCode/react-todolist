/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";

import PropTypes from "prop-types";
import Button from "../button/ButtonNoJSX";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return jsx(
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
        alignItems: "flex-start"
      },
      jsx(
        //item pertama
        Item,
        {
          flex: 1
        },
        jsx(Button, {
          text: showAdd ? "Finish" : "Add",
          onClick: showAddToggle
        })
      ),
      jsx(
        //item kedua
        Item,
        {
          flex: 2
        },
        jsx(
          "h1",
          {
            css: styles.headerTitle(theme)
          },
          "Todo Lists"
        )
      ),
      jsx(
        //item ketiga
        Item,
        {
          flex: 1,
          align: "right"
        },
        jsx(Button, {
          text: "Clear",
          onClick: clearTodos,
          color: "red",
          align: "right"
        })
      )
    )
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
