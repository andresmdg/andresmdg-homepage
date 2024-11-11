import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph.js'
import { BioSection, BioYear } from '../components/bio.js'
import Layout from '../components/layouts/article.js'
import Section from '../components/section.js'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container my={14} pt={14}>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andres Martinez
          </Heading>
          <p>Desarrollador de software ( Web / Desktop / Mobile )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/andres.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mi
        </Heading>
        <Paragraph>
          Andres es un desarrollador full-stack originario de Aguascalientes con
          una pasion por construir productos/servicios digitales. Tiene un don
          para todas las cosas de desarrollo de productos/servicios digitales,
          desde la planificacion, el diseño y todo el camino hacia una solución
          de problemas de la vida real con codigo. Cuando no esta conectado
          disfruta escuchar musica. Actualmente esta centrado en mejorar y
          aprender cosas nuevas.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Mi portafolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999 </BioYear>
          Nacio en Aguascalientes (ags), Mexico
        </BioSection>
        <BioSection>
          <BioYear>2022 - hoy</BioYear>
          Trabajando de manera independiente
        </BioSection>
        <BioSection>
          <BioYear> 2023</BioYear>
          Programa completado &apos;Oracle Next Education - Back-end&apos;
          impartido por alura Latam academy.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Me ♥
        </Heading>
        <Paragraph>
          Musica, Baseball, Boxeo, Comics, Videojuegos, Carros
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          En la web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/andresmdg" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @andresmdg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/andresmdg" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @andresmdg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/andresmdg_">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @andresmdg_
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra.js'
