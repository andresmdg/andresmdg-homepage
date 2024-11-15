import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work.js'
import Paragraph from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'

const Work = () => (
  <Layout title="GreenPark">
    <Container my={14} pt={14}>
      <Title>
        green park <Badge> 2023-</Badge>
      </Title>
      <Paragraph>
        Sitio web corporativo de la constructora y agencia inmobiliaria con sede
        en colombia.
      </Paragraph>
      <Paragraph style={{ textIndent: '0em' }}>
        El fundador de la agencia inicialmente solicitó realizar cambios en su
        sitio web. Sin embargo, al identificar algunos errores y oportunidades
        de mejora, se le notificó al cliente sobre estos aspectos. Tras obtener
        su aprobación, se implementaron tanto las mejoras visuales como las
        modificaciones solicitadas inicialmente.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://condominiogreenpark.com/">
            https://www.condominiogreenpark.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>Wordpress / Elementor / MySQL / Cloudinary</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/greenpark_01.png" alt="GreenPark" />
    </Container>
  </Layout>
)

export default Work
