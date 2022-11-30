import { Text } from '@chakra-ui/react'
import styles from '@styles/Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
        <Text>
            Ontological Game &copy; {year}
        </Text>
    </footer>
  )
}