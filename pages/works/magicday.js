import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work.js'
import Paragraph from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'

const Work = () => (
  <Layout title="MagicDay">
    <Container my={14} pt={14}>
      <Title>
        MagicDay App <Badge> 2024-</Badge>
      </Title>
      <Paragraph>Aplicación de red social para crear y asistir a eventos</Paragraph>
      <Paragraph style={{ textIndent: '0em' }}>
        El cliente solicitó restaurar su aplicación, que dejó de funcionar
        debido a problemas técnicos. La aplicación fue desarrollada en una
        versión legacy de Node.js, Vue y AdonisJs. Además de la reparación,
        también pidió completar el despliegue y la configuración de su servidor
        VPS.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Sitio Web</Meta>
          <Link href="https://webapp.magicday.app/">
            https://webapp.magicday.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>Vue / Quasar / Node / AdonisJs / MongoDB</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/magicday_01.png" alt="MagicDay" />
    </Container>
  </Layout>
)

export default Work
