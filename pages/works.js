import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article.js'
import Section from '../components/section.js'
import { WorkGridItem } from '../components/grid-item.js'

import thumbGreenPark from '../public/images/works/greenpark_eyecatch.png'
import thumbCorafam from '../public/images/works/corafam_eyecatch.png'
import thumbMagicDay from '../public/images/works/magicday_eyecatch.png'
import thumbRestoBar from '../public/images/works/restobar_eyecatch.png'
import thumbAUJunior from '../public/images/works/auj_eyecatch.png'

const Works = () => {
  return (
    <Layout title="Trabajos">
      <Container my={14} pt={14}>
        <Heading as="h3" fontSize={20} mb={8}>
          Trabajos
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="adoptaunjunior"
              title="AdoptaUnJunior"
              thumbnail={thumbAUJunior}
            >
              Sitio web para gestion de información de la comunidad.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="corafam" title="Corafam" thumbnail={thumbCorafam}>
              Sitio web para gestion de eventos de la empresa.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="magicday"
              title="Magic Day"
              thumbnail={thumbMagicDay}
            >
              Sitio web de una redsocial para crear y asistir eventos
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="greenpark"
              title="green park"
              thumbnail={thumbGreenPark}
            >
              Sitio web corporativo de la constructora y agencia inmobiliaria
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="restobar"
              title="meetingrestobar"
              thumbnail={thumbRestoBar}
            >
              Sitio web para un menu digital del restaurante meetingrestobar
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
export { getServerSideProps } from '../components/chakra.js'
