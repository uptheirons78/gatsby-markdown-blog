import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  const currentYear = new Date().getFullYear();
  console.log(author);

  return (
    <footer>
      <p>
        Created by {author} © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
