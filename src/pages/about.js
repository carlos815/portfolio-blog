import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Section from "../components/section"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const myAge = () => {
    const myBirthDay = new Date("February 8, 1993 04:20:00")
    const now = new Date()
    const a = new Date(now - myBirthDay)
    return (a.getFullYear() - 1970)
  }

  React.useEffect(() => {
    myAge()
  }, [])


  return (
    <Layout location={location} title={siteTitle}>

      <Section>
        <h1>Carlos Hernández? Who that?</h1>

        <p className="">I'm a developer from Venezuela. I'm currently based in Colombia. I'm {myAge()} years old.</p>
        <p><a href="https://carlos815.github.io/portfolio/">Link to my portfolio</a></p>
        <p className="">
          I was actually an economist, but pivoted to development during the pandemic
        </p>

        <p>I have worked with React, Flutter and even Python for some data analysis, but I mostly gravitate towards React.</p>
        <p>I&#39;m the creator of <a href="laslucas.com">Las Lucas</a>, a completely free website that compiles the different exchange rates in Venezuela. It has over 10.000 visits each month.</p>
        <p>The site uses multiple web scrappers to keep itself updated with the many <em>officialish</em> exchange rates (long story) and shows it with a very simple interface. That way people don't have to scour social media sites to get updates multiple times a day, which is a challenge for people that are not tech savvy and/or have slow connection.</p>

        <p>I&#39;m good at writing chronicles. As in, I-should-be-doing-that-for-a-living-instead-of-programming kind of good, with multiple publications in big sites like the NTY and the Washington Post.</p>
        <p>I learned English by playing Zelda and Star Fox in the Nintendo 64, which officially makes me a Certified Nerd™.</p>
        <p>I&#39;m very into metal music. I used to play the keyboard in <a href="https://soundcloud.com/neutrinia-banda">a power metal band</a> back in college. I kinda&#39; miss that.</p>
        <p>I like exercising, specially running, although as a Certified Nerd™, I admit that screwing around with data sheets about my performance in Excel was half of the fun. Right now I&#39;m into CrossFit, which I&#39;m terrible at, but it&#39;s still lots of fun (what up 6 am squat?).</p>
        <h2 id="publications">Publications</h2>
        <p>Here are some notable publications:</p>
        <p>“How Bitcoin Saved My Family”. February 23, 2019. New York Times. Op-ed
          piece. Published
          on the printed edition of the Sunday Review.</p>
        <p>“On a Date While Venezuela Burns”. August 4, 2017. Op-ed piece. Published
          on the printed edition of the Sunday Review.</p>
        <p>“Binding Constraints, or why the Venezuelan Economy is Screwed”. Caracas
          Chronicles. November 18, 2016. A review of a study by the Center for
          International Development (CID) of Harvard Kennedy School about the
          macroeconomic constrains for investments in Venezuela.</p>
        <p>“How I Voted in Venezuela’s (Non) Election”. May 21, 2018. New York Times.
          Op-ed piece.</p>
        <p>“Middle Class and Hungry in Venezuela”. August 16, 2016. New York Times.
          Op-ed piece.</p>
        <p>&quot;In Venezuela, a daily struggle for the basic necessities of life”. April
          10, 2018. Washington Post. Op-ed Piece on the Democracy Post section.</p>
        <h2 id="open-source-projects">Open-source Projects</h2>
        <p>For now this section is better read on <a href="https://carlos815.github.io/portfolio/">my portfolio page</a> which has some nice illustrations, and a handy graph of all of my tech stack. I&#39;m in the process of migrating all of that to this new blog, so this section will eventually be it&#39;s own page. For now, it&#39;s this very lame list.</p>
        <h5 id="full-stack-online-shop-">Full stack online shop.</h5>
        <p><a href="https://3rd-shop.vercel.app/">Demo</a> | <a href="https://github.com/carlos815/3rd-shop-frontend">Front-end source code</a> | <a href="https://github.com/carlos815/3rd-shop-backend">Back-end source code</a> | <a href="https://www.figma.com/file/9ggHbHWHxIXkcL0kUdF5Q0/3rd-Shop?node-id=9%3A241&amp;t=QSw2DVPTPc4OyzmR-1">Design</a></p>
        <p>A fullstack project powered by Next.js and KeystoneJS. Supports account creation and credit card payments via Stripe. With full CMS support for managing products and accounts with ease. I did the design too 🦄</p>
        <h5 id="ethereum-chat">Ethereum chat</h5>
        <p><a href="https://eth-chat.vercel.app/">Demo</a> | <a href="https://github.com/carlos815/eth-chat">Source Code</a></p>
        <p>A chat page with Metamask login built in Firebase. It lets you send messages to  other ethereum addresses.</p>
        <h5 id="pomodoro-timer">Pomodoro Timer</h5>
        <p><a href="https://tomate.netlify.app/">Demo</a> | <a href="https://github.com/carlos815/pomodoro">Source Code</a></p>
        <p>A Pomodoro timer built in React using Redux. I designed it using neumorphism.</p>

        <h2>Contact</h2>
        <p> <a className="" href="https://www.linkedin.com/in/carlos-hern%C3%A1ndez-5a751422a/">LinkedIn</a> | <a href="https://twitter.com/carlos_t815" className="">Twitter</a></p>
        <p className="">I also use the technology of internet mail correspondence, also known as <a href="https://en.wikipedia.org/wiki/Email">electronic mail</a>, contact me at cccarlos@duck.com      </p>
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
