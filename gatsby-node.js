const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}, limit: 1000) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              language
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          language: post.frontmatter.language
        },
      })
    })
  }

  //---------

  //Tag pages

  const tagPage = path.resolve(`./src/templates/tag.js`)

  // Get all markdown blog posts sorted by date
  const resultTag = await graphql(
    `{
          allMarkdownRemark {
            group(field: frontmatter___tags) {
              fieldValue
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    language
                  }
                }
              }
            }
          }
      }`
  )

  if (resultTag.errors) {
    reporter.panicOnBuild(
      `There was an error loading your tag pages`,
      resultTag.errors
    )
    return
  }

  const tags = resultTag.data.allMarkdownRemark.group
  // Create tag pages
  const allPostsPage = path.resolve(`./src/templates/all-posts.js`)

  if (tags.length > 0) {
    tags.forEach((tag, index) => {
      const id = tag.fieldValue
      tag.edges.map(edge => {
        const language = edge.node.frontmatter.language
        createPage({
          path: `/${language}/tags/${id}`,
          component: allPostsPage,
          context: {
            id,
            language
          },
        })
      })
    })
  }
  //---------


  const allLanguagesQuery = await graphql(
    `{
        allMarkdownRemark {
          group(field: frontmatter___language) {
            fieldValue
          }
        }
    }`
  )

  if (allLanguagesQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your languages`,
      allLanguagesQuery.errors
    )
    return
  }

  const languages = allLanguagesQuery.data.allMarkdownRemark.group.map((group) => group.fieldValue)

  if (languages.length > 0) {
    languages.forEach((language, index) => {
      //Create all-posts pages
      createPage({
        path: `/${language}/all-posts`,
        component: allPostsPage,
        context: {
          language
        },
      })


    })
  }
}





exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
