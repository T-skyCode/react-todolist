// /** @jsxImportSource @emotion/react */

import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import { container } from "../paper/paper.styles";

import * as styles from "./about.styles";

const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About this App</h1>
          <h3 css={styles.aboutPageSubHeader}>
            What i learn by building this app
          </h3>
        </Item>

        <Container>
          <Item>
            <p css={styles.aboutPageParagraf}>
              dalam membangun aplikasi ini, saya mempelajari banyak hal. seperti
              membuat komponen, props, function, emotion css, styling dan lain
              lain nya
            </p>
          </Item>
        </Container>

        <Item align="center">
          <Link to="/">
            <span css={styles.backToHome}> Back to Home </span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
