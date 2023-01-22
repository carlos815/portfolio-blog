import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../../components/bio"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Section from "../../components/section"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        <h2 className="text-2xl mb-3">Todos los posts</h2>
        <ol className="list-none divide-y divide-primary flex flex-col justify-center w-full">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const featuredimage = getImage(post.frontmatter.featuredimage?.src)
            return (
              <li key={post.fields.slug} className=" hover:bg-primary group ">
                <Link to={post.fields.slug} itemProp="url" className="flex no-underline  ">
                  <article
                    className="flex justify-between w-full md:flex-row flex-col p-2  gap-x-6 ">
                    {
                      featuredimage && (
                        <GatsbyImage image={featuredimage} alt={post.frontmatter.featuredimage.alt} />
                      )
                    }
                    <div className="w-full">
                      <h2 className="text-xl w-full  mb-0 group-hover:text-background">
                        {title}
                      </h2>
                      <p className="text-base group-hover:text-background">{post.frontmatter.description}</p>
                    </div>
                    <p className="text-base text-secondary w-40 md:text-right  mb-0 md:block ">{post.frontmatter.date}</p>
                  </article>
                </Link>
              </li>
            )
          })}
        </ol>
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
          date(formatString: "MMM DD, YYYY")
          title
          description
          featuredimage {
            src {
              childImageSharp {
                gatsbyImageData(width: 250, height: 185, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            alt
          }
        }
      }
    }
  }
`