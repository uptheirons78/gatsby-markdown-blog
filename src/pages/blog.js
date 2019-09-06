import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            id
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol>
        {posts.map(post => {
          const { title, date } = post.node.frontmatter;
          const { id } = post.node;
          return (
            <li key={id}>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
