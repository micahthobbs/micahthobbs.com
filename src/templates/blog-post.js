import React from "react"
import { graphql } from "gatsby"
import Layout from "../pages/components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <h3>Comments</h3>
      <p>No comments? There are intentionally no comments on this site. If you found any errors in this article, please feel free to edit on GitHub.</p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`