import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"
import Comments from "../components/comments"
import Tag from "../components/tag"
import { data } from "autoprefixer"

const TagTemplate = ({
  data,
  location,
}) => {
  // const siteTitle = site.siteMetadata?.title || `Title`
  console.log(data)
  return (
    <Layout location={location} title={"siteTitle"} >
      asdasf
      {data.toString()}
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
    // title={post.frontmatter.title}
    // description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default TagTemplate

export const tagQuery = graphql`
  query TagQuery(
    $id: String!
    $language: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
 allMarkdownRemark(
    filter: {frontmatter: {language: {eq:  $language}, tags: {in: [$id]}}}
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
  }
`
