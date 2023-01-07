import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"
import { ReactComponent as MainImage } from "../images/svg/main.svg"
import HeroImage from "../images/main.png"

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
        <h1>About Me</h1>

        <p className="text-base mb-4">This very new blog is a work in progress and I should remember to put something about me in this placehodler text, so if your are reading this, this means you are one of my first visitors, thanks!. In the meantime I'll copy-paste the same thing that's in the front page and put links to my social media and places where you can contact me. </p>

        <p className="text-base mb-4">
          I'm a developer in Colombia. I make programming projects and then write about them. I am constantly learning things. I make music, practice chess, play videogames, write and read a lot.
        </p>

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
