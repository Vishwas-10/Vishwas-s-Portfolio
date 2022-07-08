import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a CSE junior at IIT MANDI!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vishwas Saini
          </Heading>
          <p>3rd year B.Tech. CSE undergrad (Full Stack Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hello! 👋 I am Vishwas Saini a 3rd year Computer Science undergrad at Indian Institute of Technology, Mandi, HP. 
          I enjoy taking complex problems and turning them into simple and beautiful webpages, I also love the logic and structure of coding
          and always strive to write elegant and efficient code whether it be C++, Python, HTML, CSS or JavaScript.
          <br></br>
          When I'm not coding, you'll find me watching movies, hanging out with my friends and exploring the beauty of 🏞 Himachal.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Rohtak, India.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started B.tech. in Computer Science at IIT, Mandi, HP
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Member of Publicity Team, Xpecto (Technical Fest, IIT Mandi)
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started Working as WebD head at MTB Club, IIT Mandi
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥ 
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: "pink" }}>Music</text>,{' '}
          Movies
          , <text style={{ color: "pink" }}>Treking</text>,{' '}Photography, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>
        <li><section>Global rank 239 in Codechef November Lunchtime 2020</section></li>
        <li><section>Ranked 3rd in Fake-A-Thon, IIT Mandi an Intra-IIT Hackathon</section></li>
        <li><section>1st Runner Up, Intra College competitive programming contest hosted on Hackerearth</section></li>
        <li><section>1st Runner Up, Intra College competitive programming contest hosted on URI online judge</section></li>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Vishwas-10" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Vishwas-10
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/vishwas-saini-384212218/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Vishwas Saini
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/vishwas10/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Vishwas10
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1f8wTm2_UAicf9EZ5vJ4tMVEmUMLiXR2k/view?usp=sharing" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/1f8wTm2_UAicf9EZ5vJ4tMVEmUMLiXR2k/view?usp=sharing">Download Resume</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
