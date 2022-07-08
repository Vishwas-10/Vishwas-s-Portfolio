import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images/works/coms-home.png'
import thumbadulting101 from '../public/images/works/adulting101-home.png'
import thumbFakeFace from '../public/images/works/fakeface-home.png'
import thumbHandGesture from '../public/images/works/handgesture-home.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="COMS" title="Canteen Management System" thumbnail={thumbComs}>
            A Lamp Stack webapp, using which the canteen vendor can manage food orders efficiently.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Adulting101"
            title="Adulting101"
            thumbnail={thumbadulting101}
          >
            A CRUD based Django webapp, with a Markdown to HTML Converter and an integrated AI chat bot.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fakeface"
            title="Fake Face Classifier"
            thumbnail={thumbFakeFace}
          >
            A Machine Learning model using CNN to classify fake images generted using Generative Adversarial Networks (GANs).
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="handgesture" thumbnail={thumbHandGesture} title="Hand Gesture Recognition">
          A machine learning Model that will Recognize Hand Gestures in real time using CNN and automated using Raspberry pi.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
