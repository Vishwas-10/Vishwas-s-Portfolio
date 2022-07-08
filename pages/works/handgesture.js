import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Hand Gesture Recognition">
    <Container>
      <Title>
      Hand Gesture Recognition <Badge>2021</Badge>
      </Title>
      <P>
      Created a system to identify the hand gestures of the user at a restaurant and automated the food Ordering process.
      </P>
      <br></br>
      <P>
      Lead a team of four members,we created our own dataset and achieved an accuracy of 99% for recognition in real-time.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Vishwas-10/Hand-Gesture-Recognition">
          Hand-Gesture-Recognition<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows,MacOS,Linux,Raspberry pi</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Keras, OpenCV, ML model using CNN and Raspberry pi for Automation</span>
        </ListItem>
        
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/handgesture1.png" alt="handgesture" />
      <WorkImage src="/images/works/handgesture0.jpeg" alt="handgesture" />
      <WorkImage src="/images/works/handgesture2.jpeg" alt="handgesture" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
