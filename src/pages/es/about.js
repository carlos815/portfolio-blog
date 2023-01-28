import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Section from "../../components/section"


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
        <h1>¿Quién soy yo?</h1>
        <p className="">Soy un desarrollador de Venezuela. Actualmente vivo en Colombia. Tengo {myAge()} años.</p>
        <p><a href="https://carlos815.github.io/portfolio/">Link a mi portfolio</a></p>


        <p className="">
          De hecho soy un economista, pero aprendía a programar durante la pandemia
        </p>

        <p>He trabajado con React, Flutter e incluso Python para algo de análisis de datos, pero principalmente me inclino por React.</p>
        <p>Soy el creador de <a href="https://laslucas.com/m">Las Lucas</a>, un sitio web completamente gratuito que recopila los diferentes tipos de cambio en Venezuela. Tiene más de 10.000 visitas al mes.</p>
        <p>Se me da bien escribir crónicas. Nivel &quot;debería vivir de eso&quot;, con múltiples publicaciones en grandes sitios como NTY y el Washington Post.</p>
        <p>Aprendí inglés jugando a Zelda y Star Fox en el Nintendo 64.</p>
        <p>Me gusta el metal. Era el tecladista de <a href="https://soundcloud.com/neutrinia-banda">una banda de power metal</a> en la universidad.</p>
        <p>Me gusta hacer ejercicio, sobre todo correr, aunque admito que llevar los datos sobre mi rendimiento en Excel era la mitad de la diversión. Ahorita estoy en CrossFit, que soy malísimo, pero igual es entretenido.</p>

        <h2 id="proyectos-de-c-digo-abierto">Proyectos de código abierto</h2>
        <p>Por ahora esta sección se lee mejor en <a href="https://carlos815.github.io/portfolio/">mi página de portafolio</a> que tiene ilustraciones, y un gráfico bien bueno de mi tech stack. Estoy en el proceso de migrar todo eso a este nuevo blog, por lo que esta sección más adelante será su propia página. Por ahora, es esta listica sencilla.</p>
        <h5 id="tienda-online-full-stack-">Tienda online full stack.</h5>
        <p><a href="https://3rd-shop.vercel.app/">Demo</a> | <a href="https://github.com/carlos815/3rd-shop-frontend">Código fuente front-end</a> | <a href="https://github.com/carlos815/3rd-shop-backend">Código fuente back-end</a> | <a href="https://www.figma.com/file/9ggHbHWHxIXkcL0kUdF5Q0/3rd-Shop?node-id=9%3A241&amp;t=QSw2DVPTPc4OyzmR-1">Diseño</a></p>
        <p>Un proyecto fullstack hecho con Next.js y KeystoneJS. Soporta la creación de cuentas y pagos con tarjeta de crédito a través de Stripe. Viene con CMS para gestionar productos y cuentas con facilidad. Yo también hice el diseño 🦄.</p>
        <h5 id="ethereum-chat">Ethereum chat</h5>
        <p><a href="https://eth-chat.vercel.app/">Demo</a> | <a href="https://github.com/carlos815/eth-chat">Código Fuente</a></p>
        <p>Una página de chat con login Metamask construido en Firebase. Te permite enviar mensajes a otras direcciones ethereum.</p>
        <h5 id="temporizador-pomodoro">Temporizador Pomodoro</h5>
        <p><a href="https://tomate.netlify.app/">Demo</a> | <a href="https://github.com/carlos815/pomodoro">Código Fuente</a></p>
        <p>Un temporizador Pomodoro construido en React usando Redux. Lo diseñé usando neumorfismo.</p>


        <h2 id="publicaciones">Publicaciones</h2>
        <p>Aquí hay algunas de mis publicaciones destacadas:</p>
        <p><span className="font-bold">“How Bitcoin Saved My Family”</span>. 23 de febrero de 2019. New York Times. Artículo de opinión. Publicado
          en la edición impresa del Sunday Review.</p>
        <p><span className="font-bold">“On a Date While Venezuela Burns”</span>. 4 de agosto de 2017. Artículo de opinión. Publicado
          en la edición impresa del Sunday Review.</p>
        <p><span className="font-bold">“Binding Constraints, or why the Venezuelan Economy is Screwed”</span>. Caracas
          Chronicles. 18 de noviembre de 2016. Reseña de un estudio del Centro para el
          Desarrollo Internacional (CID) de la Harvard Kennedy School sobre las
          limitaciones macroeconómicas para las inversiones en Venezuela.</p>
        <p><span className="font-bold">“How I Voted in Venezuela’s (Non) Election”</span>.. 21 de mayo de 2018. New York Times.
          Artículo de opinión.</p>
        <p><span className="font-bold">“Middle Class and Hungry in Venezuela”</span>. 16 de agosto de 2016. New York Times.
          Artículo de opinión.</p>
        <p><span className="font-bold">“In Venezuela, a daily struggle for the basic necessities of life”</span>. Abril
          10, 2018. Washington Post. Artículo de opinión en la sección Democracy Post.</p>

        <h2>Contacto</h2>
        <p className="">Como alguien que siempre está al tanto en los últimos avances en la tecnología, soy un usuario de la correspondencia electrónica por internet, también conocida como <a href="https://en.wikipedia.org/wiki/Email">"correo electrónico"</a>, contáctame en:</p>
        <p>cccarlos@duck.com | <a className="" href="https://www.linkedin.com/in/carlos-hern%C3%A1ndez-5a751422a/">LinkedIn</a> | <a href="https://twitter.com/carlos_t815" className="">Twitter</a> </p>
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
