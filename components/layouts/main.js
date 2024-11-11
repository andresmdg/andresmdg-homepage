import Head from 'next/head'
import Navbar from '../navbar.js'
import Footer from '../footer.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="andresmdg homeapage" />
        <meta name="author" content="Andres Martinez" />
        <meta name="author" content="andresmdg" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="sortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Andres Martinez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andresmdg" />
        <meta name="twitter:creator" content="@andresmdg" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Andres Martinez" />
        <meta name="og:title" content="Andres Martinez" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Inicio - Andres Martinez</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
