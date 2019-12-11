import React from "react"
import { graphql } from "gatsby"
import Layout from "./components/layout"

export default ({ data }) => {
    console.log(data)
    return (
      <Layout>
        <div>
          <h2>Blog</h2>
          {/*</div>4>{data.allMarkdownRemark.totalCount} Posts</4>*/}
          <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <li><h3>
                {node.frontmatter.title}{" "}
                {/*<span>
                  — {node.frontmatter.date}
                </span>*/}
              </h3></li>
              {/*<p>{node.excerpt}</p>*/}
            </div>
          ))}
          </ul>
        </div>
      </Layout>
    )
  }
  export const query = graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `