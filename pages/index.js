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

      <Flex>
        <Text>Merca City</Text>
        <Spacer />
        <Text>Labyrinthine Unreal</Text>
      </Flex>

      <Flex>
        <Text>TaurosDAO</Text>
        <Spacer />
        <Text>DigiPicks</Text>
      </Flex>

      <Footer />
      
    </Box>
  )
}
