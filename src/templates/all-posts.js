import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tag from "../components/tag"

const BlogIndex = ({ data: { site, tags, allMarkdownRemark: posts }, location, pageContext: { language, id }
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const totalCount = posts.totalCount
  console.log(tags)
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
  const title = () => {
    if (id) return `${id} (${totalCount})`
    switch (language) {
      case "es":
        return "Todos los posts"
      case "en":
        return "All posts"
    }
  }
  console.log(id)

  return (
    <Layout location={location} title={siteTitle}>
      <Section>
        <h1 className="text-2xl mb-3">{title()}</h1>
        <ol className="list-none divide-y divide-primary flex flex-col justify-center w-full">
          {posts.nodes.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const featuredimage = getImage(post.frontmatter.featuredimage.src)
            return (
              <li key={post.fields.slug} className=" hover:bg-primary group transition-all duration-100">
                <Link to={post.fields.slug} itemProp="url" className="flex no-underline  ">
                  <article
                    className="flex justify-between w-full md:flex-row flex-col p-2  gap-x-6 ">
                    {
                      featuredimage && (
                        <div className="mb-4 md:mb-0 bg- flex items-center h-full">                        <GatsbyImage image={featuredimage} alt={post.frontmatter.featuredimage.alt} className="aspect-[250/185] w-full" />
                        </div>
                      )
                    }
                    <div className="w-full">
                      <h2 className="text-xl w-full  mb-0 group-hover:text-background font-serif">
                        {title}
                      </h2>
                      <p className="text-base group-hover:text-background  mb-0">{post.frontmatter.description}</p>
                      {true && post.frontmatter?.tags && <div className="flex gap-3 my-2 flex-wrap">{post.frontmatter.tags.map((tag) =>
                        <Tag name={tag} lang={post.frontmatter.language} key={tag} />
                      )}</div>}
                    </div>
                    <p className="text-base text-secondary w-40 md:text-right   md:block  mb-4">{post.frontmatter.date}</p>
                  </article>
                </Link>
              </li>
            )
          })}
        </ol>



      </Section>
      <Section>
        <h1>All Tags</h1>
        <ul className="list-none flex wrap gap-4">
          {tags.group.map(tag =>
            <Tag name={tag.fieldValue} count={tag.totalCount} lang={language} key={tag.fieldValue} active={id === tag.fieldValue} />
          )}
        </ul>
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

export const allPostsQuery = graphql`
   query AllPostsQuery(
    $language: String!
    $id: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC,  },    filter: {frontmatter: {language: {eq: $language}, tags: {eq: $id}}}
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
          tags
          language
        }
      }
      totalCount
    }
    tags:allMarkdownRemark(filter: {frontmatter: {language: {eq: $language}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
    totalCount
  }
  }
`
