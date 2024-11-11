import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work.js'
import Paragraph from '../../components/paragraph.js'
import Layout from '../../components/layouts/article.js'

const Work = () => (
  <Layout title="meetingrestobar">
    <Container my={14} pt={14}>
      <Title>
        meetingrestobar <Badge> 2024-</Badge>
      </Title>
      <Paragraph>
        Menu digital de los platillos existentes del restaurante
      </Paragraph>
      <Paragraph style={{ textIndent: '0em' }}>
        El cliente solicitó una solución para un problema recurrente: crear un
        sitio web que, al escanear un código QR, redirigiera directamente al
        menú digital. Esto agiliza el proceso, permitiendo que los clientes
        consulten el menú en cualquier momento, incluso si aún no han decidido
        qué ordenar.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://meeting-resto-bar.vercel.app/">
            https://meeting-resto-bar.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Tecnologias</Meta>
          <span>React / Node.js / TailwindCss</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/restobar_01.png" alt="meetingrestobar" />
    </Container>
  </Layout>
)

export default Work
