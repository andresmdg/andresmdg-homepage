import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article.js'
import Section from '../components/section.js'
import { WorkGridItem } from '../components/grid-item.js'

import thumbGreenPark from '../public/images/works/greenpark_eyecatch.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container my={14} pt={14}>
        <Heading as="h3" fontSize={20} mb={8}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="greenpark"
              title="GreenPark"
              thumbnail={thumbGreenPark}
            >
              A website for a construction company and real state agency.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
export { getServerSideProps } from '../components/chakra.js'
