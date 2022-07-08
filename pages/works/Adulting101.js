import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Adulting 101">
    <Container>
      <Title>
        Adulting 101 <Badge>2021</Badge>
      </Title>
      <P>
        Adulting 101 is a one stop solution for all finance problems. It is build using build using Python-based webframework Django, 
        key features include add page, edit page, generate random page, ask form AI chat bot.
      </P>
      <br></br>
      Implemented a Markdown to HTML Converter that will automatically convert your markdown code to a HTML page whenever you add a new page.
      <P>

      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Vishwas-10/Adulting101">
          Adulting 101 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Django, HTML, CSS, JavaScript, Dialogflow, Tensorflow</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/adulting101-home.png" alt="adulting101" />
      <WorkImage src="/images/works/adulting1.png" alt="adulting101" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
