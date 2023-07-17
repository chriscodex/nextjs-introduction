import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const avoFacts = [
  {
    title: '¿Quienes somos?',
    content:
      'En Perú Dota 2 Store, somos apasionados por el fascinante mundo de Dota 2 y nos enorgullece ofrecerte una amplia gama de productos coleccionables de tus héroes favoritos. Ya seas un jugador apasionado, un entusiasta de la temática de Dota 2 o un coleccionista ávido, ¡aquí encontrarás algo que te encantará!',
  },
  {
    title: 'Nuestro objetivo',
    content:
      'Nuestro objetivo es brindarte la mejor experiencia de compra posible mientras te sumerges en el universo de Dota 2. Trabajamos en estrecha colaboración con empresas de todo el Perú, así como con los proveedores oficiales de Valve, para asegurarnos de que nuestros productos sean auténticos, de alta calidad y estén respaldados por la pasión y el cuidado que merecen.',
  },
  {
    title: 'Lo que ofrecemos',
    content:
      'En Perú Dota 2 Store, encontrarás una amplia selección de productos que incluyen figuras de acción, peluches, ropa, pósters, tazas y muchos más artículos relacionados con Dota 2. Trabajamos arduamente para mantenernos actualizados con las últimas novedades y lanzamientos, por lo que siempre podrás encontrar productos nuevos y emocionantes en nuestra tienda.',
  },
  {
    title: 'Nuestro Servicio',
    content:
      'Nos enorgullece ofrecer a nuestros clientes un servicio excepcional. Nuestro equipo amable y conocedor está siempre dispuesto a ayudarte en todo lo que necesites, ya sea para responder preguntas, proporcionar recomendaciones o ayudarte a encontrar ese artículo especial que has estado buscando. Tu satisfacción es nuestra máxima prioridad. ',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
          Bienvenidos a Perú Dota 2 Store
        </Header>
        <figure>
          <Image src="/images/dt2.jpg" alt="Avocados on a table" />
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: grey;
        }

        ol {
          list-style: none;

          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;

          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);

          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
