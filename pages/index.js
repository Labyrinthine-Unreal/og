import Head from 'next/head'
import { Flex, Text, Spacer, Box } from '@chakra-ui/react'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box className={styles.container}>
      <Head>
        <title>Ontological Game</title>
        <meta name="description" content="The Ontological Game is an ecosystem comprising a group of closely related projects and a unique system of interconnected games, giving rise to an innovative and symbiotic open economy across their borders" keywords="web3, game, gaming, GameFi, blockchain, play-to-earn, crypto, cyptocurrency, NFT, MMORPG, mystery, exploration, DAO, TaurosDAO, marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Text textStyle="title">Ontological Game</Text>
        <Text textStyle="content">The Ontological Game is an ecosystem comprising a group of closely related projects and a unique system of interconnected games, giving rise to an innovative and symbiotic open economy across their borders</Text>
      </Box>
      <Flex>
        <Box>
          <Text textStyle="title">Merca City</Text>
          <Text textStyle="content">Merca City is an open world MMORPG-RTS, where artists, designers, developers, gamers, and collectors may come together to play, experiment, and collaborate.</Text>
        </Box>
        <Spacer />
        <Box>
          <Text textStyle="title">Labyrinthine Unreal</Text>
          <Text textStyle="content">Labyrinthine Unreal is a game of mystery and exploration, and the subterranean space of Merca City. Players may move between worlds through hidden portals that can be accessed from a personal tablet (each player is equipped with one at the beginning of the game).</Text>
        </Box>
      </Flex>

      <Flex>
        <Box>
          <Text textStyle="title">TaurosDAO</Text>
          <Text textStyle="content">TaurosDAO is a community of artists, collectors, developers, and designers launched in January of 2022 and presently managed by The Ontological Game Team. It organizes 3D digital events, collects notable works of art, and designs, creates, curates, and manages art galleries for its members and collectors.</Text>
        </Box>
        <Spacer />
        <Box>
          <Text textStyle="title">DigiPicks</Text>
          <Text textStyle="content">DigiPicks is an NFT marketplace that exists at the intersection of all the above projects; A game asset store for Merca City and Labyrinthine Unreal, as well as a marketplace for artworks and collections by TaurosDAO members, artists and third party projects.</Text>
        </Box>
      </Flex>

      <Footer />
      
    </Box>
  )
}
