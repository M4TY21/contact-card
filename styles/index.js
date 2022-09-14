import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background: linear-gradient(
      90deg,
      #091e3a -31.08%,
      #2f80ed 94.97%,
      #2d9ee0 148.65%
    ),
    #ffffff;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px;

  width: 25%;
  min-width: 355px;
  height: 639px;

  background: linear-gradient(156.58deg, #fafafa 17.17%, #c2c4cd 84.45%),
    linear-gradient(90deg, #091e3a 0%, #2f80ed 50%, #2d9ee0 100%);
  box-shadow: 1.83537px 1.83537px 22.0245px rgba(84, 127, 185, 0.2);

  border-radius: 29.3659px;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const Title = styled.h1`
  margin-top: 1rem;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  white-space: nowrap;

  color: #1d57a5;
`

export const Subtitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;

  color: #1d69cf;
`

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1.5rem;
`

export const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;

  background: linear-gradient(
      90deg,
      #091e3a -31.08%,
      #2f80ed 94.97%,
      #2d9ee0 148.65%
    ),
    #ffffff;
  border-radius: 50%;

  cursor: pointer;
`

export const Buttom = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 0 35px;

  width: 80%;
  min-width: 258px;
  height: 70px;

  border: 0;
  border-radius: 118.168px;
  background: linear-gradient(90deg, #091e3a 0%, #2f80ed 50%, #2d9ee0 100%);

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fffefe;

  cursor: pointer;
`
