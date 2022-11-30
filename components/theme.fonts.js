import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
//   fonts: {
//     heading: `'TrajanusBricks', sans-serif`
//   },
  textStyles: {
    title: {
      fontWeight: "extrabold",
      color: "black",
      textShadow: "1px 1px white",
      pb: "10"
    },

    subtitle: {
      fontWeight: "extrabold",
      color: "black",
      textShadow: "1px 1px white",
      pb: "4"
    },

    landingPageContent: {
        boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
        rounded: "lg",
        py: "8",
        px: "4",
        lineHeight: 'taller',
      },
  
      content: {
        boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
        rounded: "lg",
        py: "8",
        px: "4",
        bg: "#ffffffbb",
        opacity: "0.8",
        lineHeight: 'taller',
      },
  
      blogContent: {
        boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
        rounded: "lg",
        pt: "8",
        pb: "2",
        px: "4",
        lineHeight: 'taller',
      },

  },
  styles: {
    global: {
      body: {
        fontWeight: 'light',
        color: "black"
      }
    }
  }
})

export default theme