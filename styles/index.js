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
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  max-width: 483px;
  height: 639px;

  background: linear-gradient(156.58deg, #fafafa 17.17%, #c2c4cd 84.45%);
  box-shadow: 1.55897px 1.55897px 9.35384px rgba(84, 127, 185, 0.45);

  border-radius: 29.3659px;
`

export const Avatar = styled(Image)`
  background: linear-gradient(
    90deg,
    rgba(9, 30, 58, 0.2) 0%,
    rgba(47, 128, 237, 0.2) 50%,
    rgba(45, 158, 224, 0.2) 100%
  );
  border-radius: 243.977px;
`

export const Title = styled.h1``

export const Subtitle = styled.h2``
