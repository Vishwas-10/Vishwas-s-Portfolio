import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Fake Face Classifier">
    <Container>
      <Title>
        Fake Face Image (generated using GAN’s) Classification <Badge>2021</Badge>
      </Title>
      <P>
      With the advent of Generative Adversarial Networks (GANs), there are lots of fake images and videos of people on the internet. These algorithms can generate very accurate and realistic looking images and videos.
      </P>
      <br></br>
      <P>
      Created a Machine Learning model using CNN and achieved 80% accuracy to classify these images and videos as real or fake.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Google Colab</Meta>
          <Link href="https://colab.research.google.com/drive/1ADxLFP-0gfAEh5ko93C3KlKpBNJEaTrV?usp=sharing">
          Fake-Face-Image-Classification<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Tensorflow, Keras, Deep Learning model with CNN</span>
        </ListItem>
  
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/fakeface1.png" alt="fakeface" />
      <WorkImage src="/images/works/faceface2.png" alt="fakeface" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
