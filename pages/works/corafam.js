import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work.js'
import Paragraph from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'

const Work = () => (
  <Layout title="CoraFam">
    <Container my={14} pt={14}>
      <Title>
        Corafam <Badge> 2024-</Badge>
      </Title>
      <Paragraph>
        El sitio web de administracion para la corporacion corafam para
        administrar eventos.
      </Paragraph>
      <Paragraph style={{ textIndent: '0em' }}>
        El cliente solicitó el desarrollo de una API RESTful para su sitio,
        incluyendo un módulo de invitaciones masivas vía Excel, un módulo de
        envío de correos, y un módulo para la generación de códigos QR, los
        cuales se envían por correo. Además, se requirió la resolución de
        diversos problemas identificados durante el proceso.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://corafamqr.encontraste.cl/">
            https://corafamqr.encontraste.cl.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>Node.js / Express / MongoDB / React</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/corafam_01.png" alt="Corafam" />
    </Container>
  </Layout>
)

export default Work
