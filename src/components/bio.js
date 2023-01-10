/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = ({ className, lang = "en" }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const title = lang == "en" ? "Hi! I'm Carlos Hernández" : "¡Hola! Soy Carlos Hernández";
  const subtitle = lang == "en" ? "This is my blog 🖥️" : "Este es mi blog 🖥️";
  const description = lang == "en" ? "I'm a developer in Colombia. I make programming projects and then write about them. I am constantly learning things. I make music, practice chess, play videogames, write and read a lot." : "Soy un desarrollador en Colombia. Hago proyectos de programación y luego escribo sobre ellos. Me la paso aprendiendo cosas. Hago música, practico ajedrez, juego videojuegos, escribo y leo a cada rato.";

  return (
    <div className={className}>
      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
      {/* {author?.name && (
        <p>
          Hi, I'm <strong>{author.name}</strong>
        </p>
      )}
      {author?.summary && <p>{author?.summary}</p>} */}

      <h1 className="md:text-6xl mb-4">{title}</h1>
      <p className="font-bold text-secondary text-lg md:text-xl mb-4">{subtitle}</p>
      <p className="text-base">{description}</p>
    </div>
  )
}

export default Bio
