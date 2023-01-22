import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Section from "../../components/section"
import HeroImage from "../../images/main.png"

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

        <header>

        </header>
        <div className="flex flex-col gap-8 items-center mb-8 md:flex-row ga">
          <Bio className="md:w-full" lang="es" />
          <img className="md:w-full" src={HeroImage} alt="Pc vector" />
        </div>

        <h2 className="text-2xl mb-3">Últimos posts</h2>

        <ol className="list-none divide-y divide-primary flex flex-col justify-center w-full">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <Link to={post.fields.slug} itemProp="url" className="no-underline group hover:bg-primary transition-all duration-100">
                <li key={post.fields.slug} className="py-2">
                  <article
                    className="flex justify-between w-full md:flex-row flex-col ">
                    <h3 className="text-base w-full md:max-w-[66%] mb-0 group-hover:text-background">
                      {title}
                    </h3>
                    <p className="text-base text-secondary max-w-[33%] w-full text-right mb-0 md:block hidden capitalize">{post.frontmatter.date}</p>
                  </article>
                </li>
              </Link>
            )
          })}
        </ol>
        <Link to="all-posts" className="font-sans w-fit">Ver más</Link>
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
export const Head = () => <Seo />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC,  },    filter: {fields: {slug: {regex: "/es\/([w]*-*)*\/"}}}
) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY", locale: "es")
          title
          description
        }
      }
    }
  }
`