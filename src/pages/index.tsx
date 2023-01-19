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
        <div className="flex flex-col gap-8 items-center mb-8 md:flex-row ga">
          <Bio className="md:w-full" />
          <img className="md:w-full" src={HeroImage} alt="vector de pc" />
        </div>

        <h2 className="text-2xl mb-3">Latest posts</h2>

        <ol className="list-none divide-y divide-primary flex flex-col justify-center w-full">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug} className=" hover:bg-primary group ">
                <Link to={post.fields.slug} itemProp="url" className=" no-underline  ">
                  <article
                    className="flex justify-between w-full md:flex-row flex-col py-2 ">
                    <h3 className="text-base w-full md:max-w-[66%] mb-0 group-hover:text-background">
                      {title}
                    </h3>
                    <p className="text-base text-secondary max-w-[33%] w-full text-right mb-0 md:block hidden">{post.frontmatter.date}</p>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC,  },    filter: {fields: {slug: {regex: "/en\/([w]*-*)*\/"}}}
) {
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


// import * as React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import Section from "../components/section"
// import Comment from "../components/comment"
// import Tree, { treeList } from "../components/tree"
// import { StaticImage } from "gatsby-plugin-image"

// import { ReactComponent as BitImage } from "../images/svg/cc.svg"
// import TypeWriterEffect from 'react-typewriter-effect';

// const Index = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       <Section >

//         <TypeWriterEffect
//           startDelay={100}

//           cursorColor="#c4c4c4"
//           text="This is a single text"
//           typeSpeed={100}
//           // scrollArea={myAppRef}
//         />
//           <h1 className="">Hey, I'm Carlos Hernández</h1>
//         <TypeWriterEffect >

//         </TypeWriterEffect>
//         <div className="text-base flex flex-col gap-y-12 mt-12">
//           <Comment>To skip the animations just click anywhere</Comment>

//           <p className="">I’m a front end developer.</p>
//           <p className="">
//             I have used React, Flutter, and Python to build some cool stuff.
//           </p>
//         </div>
//         <p className="absolute bottom-0 text-center w-auto self-center text-base">
//           THE PORTFOLIO IS DOWN HERE!
//         </p>
//       </Section>
//       <Section>
//         <h1 className="">My Stack</h1>
//         <p>
//           This is the list of the technologies I use, with links to examples
//         </p>

//         <Tree treeList={webStack} />

//         <p>
//           Other Technologies That I use </p>
//         <Tree treeList={techStack} />
//       </Section>
//     </Layout>
//   )
// }

// export default Index


// const webStack: treeList[] = [
//   {
//     name: "Front End Basics",
//     children: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
//   },
//   {
//     name: "Javascript Libraries",
//     children: [
//       {
//         name: "React.js",
//         children: [
//           { name: "Hooks", url: "https://carlos815.github.io/CC-clone/" },
//           { name: "Redux", url: "https://github.com/carlos815/letras-redux" },
//           { name: "Context API" },
//         ],
//       },
//       {
//         name: "Vue",
//         children: [{ name: "Nuxt.js" }],
//       },
//     ],
//   },
//   {
//     name: "Javascript Frameworks",
//     children: [
//       {
//         name: "Gatsby.js",
//         children: [
//           { name: "Netlify" },
//           { name: "CMS" },
//           { name: "GraphQL" },
//           { name: "Image Optimization" },
//         ],
//       },
//       {
//         name: "Next.js",
//         children: [{ name: "Server Side Rendering" }, { name: "Typescript" }],
//       },
//     ],
//   },
//   {
//     name: "CSS Tools",
//     children: [
//       {
//         name: "Tailwind",
//       },
//       {
//         name: "SASS",
//       },
//     ],
//   },
// ]

// const techStack: treeList[] = [
//   {
//     name: "Version Control Systems",
//     children: [{ name: "Git" }, { name: "Repo hosting services", children: [{ name: "GitHub" }] }],
//   },
//   {
//     name: "Node.js",
//     children: [
//       {
//         name: "Web Scrapping",
//         children: [
//           { name: "Cheerios" },
//           { name: "Puppeteer" },
//         ],
//       },

//       {
//         name: "Heroku",
//         children: [{ name: "Hosting" }],
//       },
//     ],
//   },
//   {
//     name: "Flutter",
//     children: [
//       {
//         name: "Firebase", children: [
//           { name: "Firestore" },
//           { name: "Authentication" },
//           { name: "Analytics" },
//         ]
//       }
//     ]
//   }

//   , { name: "Python", children: [{ name: "Data", children: [{ name: "Pandas" }, { name: "Plot.ly" }] }, { name: "Telegram API", }, { name: "Firebase", }], }]






// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Portfolio" />

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `

// //TODO: fix svg imports and import this from ""../images/svg/cc.svg" instead
// // const BitImage = () => <svg width="165" height="107" viewBox="0 0 165 107" fill="none" xmlns="http://www.w3.org/2000/svg">
// //   <path d="M118 85.3333H7V6H131.535V31" stroke="currentColor" />
// //   <rect x="117.5" y="31.5" width="46.0465" height="73.8117" rx="4.5" stroke="currentColor" />
// //   <rect x="122.367" y="36.8988" width="36.3128" height="63.0141" stroke="currentColor" />
// //   <rect x="122.535" y="36.5349" width="35.9767" height="5.53488" fill="currentColor" />
// //   <path d="M125.302 73.4341H155.744V76.2015H136.672H125.302V73.4341Z" fill="currentColor" />
// //   <path d="M125.302 77.124H155.744V79.8915H136.672H125.302V77.124Z" fill="currentColor" />
// //   <path d="M125.302 82.6589H155.744V84.5039H136.672H125.302V82.6589Z" fill="currentColor" />
// //   <path d="M125.302 85.4263H155.744V87.2713H136.672H125.302V85.4263Z" fill="currentColor" />
// //   <path d="M125.302 88.1938H155.744V90.0387H136.672H125.302V88.1938Z" fill="currentColor" />
// //   <path d="M125.302 92.8062H136.672H144.328H155.744V93.7287H136.672H125.302V92.8062Z" fill="currentColor" />
// //   <rect x="137.97" y="33.8337" width="5.1008" height="0.566755" fill="currentColor" />
// //   <rect x="125.802" y="45.3372" width="29.4419" height="23.907" stroke="currentColor" />
// //   <path d="M7 6H131.535V17.0698H7V6Z" fill="currentColor" />
// //   <rect x="33.3295" y="23.1047" width="70.9535" height="33.1318" stroke="currentColor" />
// //   <rect x="32.8295" y="60.4264" width="71.9535" height="7.37985" fill="currentColor" />
// //   <rect x="32.8295" y="68.7287" width="71.9535" height="7.37985" fill="currentColor" />
// //   <path
// //     d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H133.372C135.857 0.5 137.872 2.51472 137.872 5V31.5H123C119.962 31.5 117.5 33.9624 117.5 37V91.7481H5C2.51472 91.7481 0.5 89.7333 0.5 87.2481V5Z"
// //     stroke="currentColor" />
// //   <path
// //     d="M87.694 92.248C91.2647 95.721 93.5161 100.193 93.7865 105.105C93.8047 105.436 93.8139 105.769 93.8139 106.105L44 106.105C44 105.769 44.0092 105.436 44.0275 105.105C44.2978 100.193 46.5492 95.721 50.12 92.248"
// //     stroke="currentColor" stroke-linecap="square" />
// // </svg>