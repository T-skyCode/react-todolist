import React from "react";
import { withTheme, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledPaper = styled.div`
  width: 600px;
  min-height: 600px;
  background-color: ${(props) => props.theme.background.color.primary};
  border-radius: 4px;
  margin-top: 70px;
  padding: 32px;
`;

const StyledFrame = styled.div`
  height: 100%;

  border: 2px solid ${(props) => props.theme.color.primary.black};
`;

class Paper extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <StyledPaper theme={theme}>
        <StyledFrame theme={theme}>{children}</StyledFrame>
      </StyledPaper>
    );
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.nodes),
      PropTypes.node
    ])
  };
}

export default withTheme(Paper);
