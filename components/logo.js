import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import PrintIcon from './icons/print.js'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => (
  <Link href="/" scroll={false}>
    <LogoBox>
      <PrintIcon />
      <Text
        color={'whiteAlpha.900'}
        fontFamily="M PLUS Rounded 1c, sans-serif"
        fontWeight="bold"
        ml={3}
      >
        Andres Martinez
      </Text>
    </LogoBox>
  </Link>
)

export default Logo
