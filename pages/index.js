import Head from 'next/head'

import { Container, Card, Avatar, Title, Subtitle } from '../styles'
import { GlobalStyle } from '../styles/global'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Head>
          <title>Contact Card</title>
        </Head>

        <Card>
          <Title>Matheus Moura</Title>

          <Subtitle>Dev Front-End</Subtitle>
        </Card>
      </Container>
    </>
  )
}
