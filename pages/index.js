import { Container, Card, Avatar, Title, Subtitle } from '../styles'

import { GlobalStyle } from '../styles/global'

import Image from 'next/image'

import AvatarImage from '../assets/avatar.jpg'

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Avatar src={AvatarImage} width={180} height={180} />

          <Title>Matheus Moura</Title>

          <Subtitle>Dev Front-End</Subtitle>
        </Card>
      </Container>
    </>
  )
}
