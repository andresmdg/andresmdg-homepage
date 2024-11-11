import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work.js'
import Paragraph from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'

const Work = () => (
  <Layout title="MascotApp">
    <Container my={14} pt={14}>
      <Title>
        MascotApp <Badge> 2024-</Badge>
      </Title>
      <Paragraph>
        Proyecto personal en colaboración con mas personas para elaborar un
        gestor clinico.
      </Paragraph>
      <Paragraph style={{ textIndent: '0em' }}>
        Propuesta de proyecto para una clínica veterinaria, con el objetivo de
        ayudar al propietario a gestionar su negocio de manera más ágil y
        sencilla. Actualmente, el dueño maneja todo con lápiz y papel, lo que le
        consume mucho tiempo al registrar y organizar la información, así como
        al gestionar las citas.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="#">
            PENDIENTE <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>React / MongoDB / Express / Node.js</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/mascotapp_01.png" alt="mascotapp" />
    </Container>
  </Layout>
)

export default Work
