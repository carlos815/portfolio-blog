import * as React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>

      <Section>
        <h1>Carlos Hernández? Who that?</h1>

        <p className="text-base mb-4">Hi! I'm Carlos. </p>
        <p className="text-base mb-4">
          I'm a developer in Colombia. I make programming projects and then write about them. I am constantly learning things. I make music, practice chess, play videogames, write and read a lot.
        </p>
        <h2>My projects</h2>
        <p className="text-base mb-4">
          The list of projects goes here
        </p>
        <h2>My publications</h2>
        <p className="text-base mb-4">
          The list of publications goes here.
        </p>

        <h2>Contact</h2>
        <a href="https://www.linkedin.com/in/carlos-hern%C3%A1ndez-5a751422a/">LinkedIn</a>
        <a href="https://twitter.com/carlos_t815" className="mb-4">Twitter</a>
        <p className="text-base mb-4">I also use the technology of internet mail correspondence, also known as <a href="https://en.wikipedia.org/wiki/Email">electronic mail</a>, contact me at cccarlos@duck.com      </p>
      </Section>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
