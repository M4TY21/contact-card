import Head from 'next/head'
import Image from 'next/image'

import { GlobalStyle } from '../styles/global'
import { Check, Copy } from 'react-feather'

import {
  Container,
  Card,
  Avatar,
  Title,
  Subtitle,
  IconsDiv,
  Icon,
  Buttom
} from '../styles'

import AvatarImage from '../assets/avatar.jpg'
import GithubIcon from '../assets/github.svg'
import InstagramIcon from '../assets/instagram.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import WhatsAppIcon from '../assets/whatsapp.svg'
import { useState } from 'react'

export default function Home() {
  const [icon, setIcon] = useState(false)

  function handleCopyEmail() {
    navigator.clipboard.writeText('matheuseugenio212@gmail.com')
    setIcon(true)
    setTimeout(setIcon, 5000, false)
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Contact Card</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <Card>
          <Avatar src={AvatarImage} width={200} height={200} />

          <Title>Matheus Moura</Title>

          <Subtitle>Dev Front-End</Subtitle>

          <IconsDiv>
            <Icon href="https://github.com/M4TY21" target="_blank">
              <Image src={GithubIcon} width={30} height={30} />
            </Icon>
            <Icon href="https://instagram.com/mouramths" target="_blank">
              <Image src={InstagramIcon} width={30} height={30} />
            </Icon>
            <Icon
              href="https://www.linkedin.com/in/matheus-moura-1921771b9/"
              target="_blank"
            >
              <Image src={LinkedinIcon} width={30} height={30} />
            </Icon>
            <Icon href="http://wa.me/5584999926241" target="_blank">
              <Image src={WhatsAppIcon} width={30} height={30} />
            </Icon>
          </IconsDiv>

          <Buttom onClick={handleCopyEmail}>
            Copy email
            {icon ? (
              <Check size={24} color="white" />
            ) : (
              <Copy size={24} color="white" />
            )}
          </Buttom>
        </Card>
      </Container>
    </>
  )
}
