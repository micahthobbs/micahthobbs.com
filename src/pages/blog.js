import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./components/layout"

export default ({ data }) => {
    console.log(data)
    return (
      <Layout>
        <div>
          <h2>Blog</h2>
          {/*</div>4>{data.allMarkdownRemark.totalCount} Posts</4>*/}
          <ul style={{ listStyle: `none` }}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <li><Link to={node.fields.slug}><h3>
                {node.frontmatter.title}{" "}
                {/*<span>
                  — {node.frontmatter.date}
                </span>*/}
              </h3></Link></li>
              {/*<p>{node.excerpt}</p>*/}
              <p>{node.frontmatter.date}</p>
            </div>
          ))}
          </ul>
        </div>
      </Layout>
    )
  }
  
  export const query = graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    } 
  `