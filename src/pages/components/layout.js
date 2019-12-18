import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Footer from "./footer"
import Rule from "./rule"

const ListLink = props => (
  <li style={{ display: `inline-block`, margin: `0 2rem`, padding: `1rem 0` }}>
    <Link style={{ textDecoration: `none` }} to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
            <header style={{ padding: `1rem 0`, marginBottom: `5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none` }}>
                {/*<h2 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h2>*/}
                <h3 style={{ display: `inline`, fontSize: `2rem` }}><span style={{ fontSize: `2rem` }} >Micah T Hobbs</span></h3>
            </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/me/">Me</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <ListLink to="/work">Work</ListLink>
            {/* <ListLink to="/contact/">Contact</ListLink> */}
        </ul>
        </header>
        {children}
        <Rule />
        <Footer />
        </div>
    )
}