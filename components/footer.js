import { Box } from '@chakra-ui/react'

const Footer = () => (
  <Box align="center" opacity={0.4} fontSize="sm">
    &copy; {new Date().getFullYear()} Andres Martinez. All Rights Reserved.
  </Box>
)

export default Footer
