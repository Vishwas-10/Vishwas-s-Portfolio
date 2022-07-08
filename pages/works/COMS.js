import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="Canteen Management System">
    <Container>
      <Title>
      Canteen Management System <Badge>2021-</Badge>
      </Title>
      <P>
      A webapp using LAMP stack, on which the canteen vendor can put up items and students can create account,
order food in a hassle free manner.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Vishwas-10/Canteen-Order-Management-System">
          Canteen-Order-Management-System<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML,CSS,JavaScript,PHP,MySQL</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/coms-home.png" alt="COMS" />
      <WorkImage src="/images/works/coms1.png" alt="COMS" />
      <WorkImage src="/images/works/coms2.png" alt="COMS" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
