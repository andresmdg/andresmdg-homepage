import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work.js'
import Paragraph from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'

const Work = () => (
  <Layout title="GreenPark">
    <Container my={14} pt={14}>
      <Title>
        AdoptaUnJunior - Dashboard <Badge> 2025-</Badge>
      </Title>
      <Paragraph>
        El sitio web administrativo de la comunidad de desarrolladores junior.
      </Paragraph>
      <Paragraph style={{ textIndent: '0em' }}>
        El cliente pide desarrollar una plataforma que facilite la gestion y
        visualización de información clave de su comunidad.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="#">
            PENDIENTE <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>React / TailwindCSS / NestJs / PostgreSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Estado</Meta>
          <Badge colorScheme="yellow">En progreso </Badge>
        </ListItem>
      </List>
      <WorkImage src="/images/works/auj_eyecatch.png" alt="Portada del proyecto" />
      <WorkImage src="/images/works/auj_01.png" alt="Inicio de sesion" />
      <WorkImage src="/images/works/auj_02.png" alt="Dashboard" />
      <WorkImage src="/images/works/auj_03.png" alt="Anuncios" />
      <WorkImage src="/images/works/auj_04.png" alt="Contactos" />
      <WorkImage src="/images/works/auj_05.png" alt="Calendario" />
    </Container>
  </Layout>
)

export default Work
