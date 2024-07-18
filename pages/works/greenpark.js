import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work.js'
import Paragraph from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'

const Work = () => (
  <Layout title="GreenPark">
    <Container my={14} pt={14}>
      <Title>
        GreenPark <Badge> 2023-</Badge>
      </Title>
      <Paragraph>GreenPark is a website...</Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://condominiogreenpark.com/">
            https://www.condominiogreenpark.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, Elementor, MySQL</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/greenpark_01.png" alt="GreenPark" />
    </Container>
  </Layout>
)

export default Work
