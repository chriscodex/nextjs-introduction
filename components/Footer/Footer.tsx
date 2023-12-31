import React from 'react'
import Link from 'next/link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Nosotros" />
            <List>
              <List.Item>
                <Link href="/about">
                  <a>Conoce más</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Servicios" />
            <List>
              <List.Item>
                <Link href="/">
                  <a>Todos los productos</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Hecho por</Header>
            <p>
              <a href="https://www.linkedin.com/in/christian-espinoza-cadillo-a29702234/">@chriscodex</a>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="linkedin"
                style={{ display: 'flex' }}
                content={<a href="https://www.linkedin.com/in/christian-espinoza-cadillo-a29702234/">LinkedIn</a>}
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/chriscodex">
                    GitHub
                  </a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
)

export default Footer
